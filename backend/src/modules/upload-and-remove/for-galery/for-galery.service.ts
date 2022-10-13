import { mimeTypeMapper, validateMimeType } from './../utility'
import { ConfigService } from '@nestjs/config'
import { AudioEntity } from '../../rest-files/entities/galery-entities/audio.entity'
import { VideoEntity } from '../../rest-files/entities/galery-entities/video.entity'
import { Injectable } from '@nestjs/common'
import { ensureDir, writeFile, pathExists, remove } from 'fs-extra'
import * as path from 'path'
import { ImageEntity } from 'src/modules/rest-files/entities/galery-entities/image.entity'
import { AudioService } from 'src/modules/rest-files/services/GaleryServices/audio.service'
import { ImageService } from 'src/modules/rest-files/services/GaleryServices/image.service'
import { VideoService } from 'src/modules/rest-files/services/GaleryServices/video.service'
import { GaleryFolderT } from '../shared-types/file-system'

const storageP = '../../../../storage'
@Injectable()
export class ForGaleryService {
  constructor(
    private readonly imageService: ImageService,
    private readonly videoService: VideoService,
    private readonly audioService: AudioService,
    private readonly configService: ConfigService,
  ) {}
  async uploadFile(
    file: Express.Multer.File,
    folder: GaleryFolderT,
    id: number,
  ): Promise<ImageEntity | VideoEntity | AudioEntity> {
    const path1 = path.join(__dirname, `${storageP}/${id}`)
    const path2 = path.join(__dirname, `${storageP}/${id}/${folder}`)
    const fileName = file.originalname
    const filePath = `${id}/${folder}/${fileName}`
    const url = `${this.configService.get('BASE_URL')}/${filePath}`
    await ensureDir(path1, (err) => console.log(err))
    await ensureDir(path2, (err) => console.log(err))
    const type = validateMimeType(mimeTypeMapper(file.mimetype))

    if (type) {
      await writeFile(`storage/${id}/${folder}/${fileName}`, file.buffer)
      return await this.invokeAppropriateServiceU(id, folder, fileName, url)
    } else if (!type) {
      throw new Error('corrupted file or invalid mime-type')
    }
  }

  async removeFile(id: number, folder: string, file_name: string) {
    const _path = path.join(
      __dirname,
      `${storageP}/${id}/${folder}/${file_name}`,
    )
    const exists = await pathExists(_path)
    if (exists) {
      remove(_path, (err) => console.log('was not removed'))
      this.invokeAppropriateServiceD(id, folder, file_name)
    }

    return exists
  }

  async invokeAppropriateServiceU(
    id: number,
    folder: string,
    file_name: string,
    url: string,
  ) {
    const relation = folder as GaleryFolderT
    switch (relation) {
      case 'images': {
        return await this.imageService.insertImage(id, url, file_name)
      }
      case 'videos': {
        return await this.videoService.insertVideo(id, url, file_name)
      }
      case 'audios': {
        return await this.audioService.insertAudio(id, url, file_name)
      }

      default:
        throw new Error('was provided  not existing relation')
    }
  }
  async invokeAppropriateServiceD(
    id: number,
    folder: string,
    file_name: string,
  ) {
    const relation = folder as GaleryFolderT
    switch (relation) {
      case 'images': {
        return await this.imageService.deleteImageByOwnerId(id, file_name)
      }
      case 'videos': {
        return await this.videoService.deleteVideoByOwnerId(id, file_name)
      }
      case 'audios': {
        return await this.audioService.deleteAudioByOwnerId(id, file_name)
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
