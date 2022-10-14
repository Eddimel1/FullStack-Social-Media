import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ensureDir, writeFile, pathExists, remove } from 'fs-extra'
import * as path from 'path'
import { AudioPostEntity } from 'src/modules/rest-files/entities/entities-for-posts/audio_post.entity'
import { ImagePostEntity } from 'src/modules/rest-files/entities/entities-for-posts/image_post.entity'
import { VideoPostEntity } from 'src/modules/rest-files/entities/entities-for-posts/video_post.entity'

import { AudioPostService } from 'src/modules/rest-files/services/PostServices/post_audio.service'
import { ImagePostService } from 'src/modules/rest-files/services/PostServices/post_image.service'
import { VideoPostService } from 'src/modules/rest-files/services/PostServices/post_video.service'

import { PostFolderT } from '../shared-types/file-system'

const storageP = '../../../../storage'
@Injectable()
export class ForPostService {
  constructor(
    private readonly imagePostService: ImagePostService,
    private readonly videoPostService: VideoPostService,
    private readonly audioPostService: AudioPostService,
    private readonly configService: ConfigService,
  ) {}
  async uploadFile(
    file: Express.Multer.File,
    folder: PostFolderT,
    id: number,
  ): Promise<ImagePostEntity | VideoPostEntity | AudioPostEntity> {
    const path1 = path.join(__dirname, `${storageP}/${id}`)
    const path2 = path.join(__dirname, `${storageP}/${id}/${folder}`)
    const fileName = file.originalname

    await ensureDir(path1, (err) => console.log(err))
    await ensureDir(path2, (err) => console.log(err))

    const filePath = `${id}/${folder}/${fileName}`
    await writeFile(`storage/${id}/${folder}/${fileName}`, file.buffer)

    const url = `${this.configService.get('BASE_URL')}/${filePath}`

    return await this.invokeAppropriateServiceU(id, folder, fileName, url)
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
    const relation = folder as PostFolderT
    switch (relation) {
      case 'post_image': {
        return await this.imagePostService.insertImage(id, url, file_name)
      }
      case 'post_video': {
        return await this.videoPostService.insertVideo(id, url, file_name)
      }
      case 'post_audio': {
        return await this.audioPostService.insertAudio(id, url, file_name)
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
    const relation = folder as PostFolderT
    switch (relation) {
      case 'post_image': {
        return await this.imagePostService.deleteImageByOwnerId(id, file_name)
      }
      case 'post_video': {
        return await this.videoPostService.deleteVideoByOwnerId(id, file_name)
      }
      case 'post_audio': {
        return await this.audioPostService.deleteAudioByOwnerId(id, file_name)
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
