import { G_Cover_EN } from './../../../rest-files/entities/groups/avatar-and-cover/group-cover.entity'
import { G_Avatar_EN } from 'src/modules/rest-files/entities/groups/avatar-and-cover/group-avatar.entity'
import { mimeTypeMapper, validateMimeType } from '../../utility'
import { ConfigService } from '@nestjs/config'

import { Injectable } from '@nestjs/common'
import { ensureDir, writeFile, pathExists, remove } from 'fs-extra'
import * as path from 'path'

import { AvatarOrCover } from '../../shared-types/file-system'
import { AvatarService_G } from 'src/modules/rest-files/services/for-groups/cover-and-avatar-services/group-avatar.service'
import { CoverService_G } from 'src/modules/rest-files/services/for-groups/cover-and-avatar-services/group-cover.service'

const storageP = '../../../../storage'
const mainFolder = 'users'
@Injectable()
export class ForCoverAndAvatarService {
  constructor(
    private readonly avatarService_G: AvatarService_G,
    private readonly coverService_G: CoverService_G,
    private readonly configService: ConfigService,
  ) {}
  async uploadFile(
    file: Express.Multer.File,
    folder: AvatarOrCover,
    id: number,
  ): Promise<G_Avatar_EN | G_Cover_EN> {
    const path1 = path.join(__dirname, `${storageP}/${mainFolder}/${id}`)
    const path2 = path.join(
      __dirname,
      `${storageP}/${mainFolder}/${id}/${folder}`,
    )

    const fileName = file.originalname
    const filePath = `/${mainFolder}/${id}${folder}/${fileName}`
    const url = `${this.configService.get('BASE_URL')}/${filePath}`
    await ensureDir(path1, (err) => console.log(err))
    await ensureDir(path2, (err) => console.log(err))
    const type = validateMimeType(mimeTypeMapper(file.mimetype))

    if (type) {
      await writeFile(
        `storage/${mainFolder}/${id}/${folder}/${fileName}`,
        file.buffer,
      )
      return await this.invokeAppropriateServiceU(id, folder, fileName, url)
    } else if (!type) {
      throw new Error('corrupted file or invalid mime-type')
    }
  }

  async removeFile(id: number, folder: string, file_name: string) {
    const _path = path.join(
      __dirname,
      `${storageP}/${mainFolder}/${id}/${folder}/${file_name}`,
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
    const relation = folder as AvatarOrCover
    switch (relation) {
      case 'avatar': {
        return await this.avatarService_G.insertImage(id, url, file_name)
      }
      case 'cover': {
        return await this.coverService_G.insertImage(id, url, file_name)
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
    const relation = folder as AvatarOrCover
    switch (relation) {
      case 'avatar': {
        return await this.avatarService_G.deleteImageByOwnerId(id, file_name)
      }
      case 'cover': {
        return await this.coverService_G.deleteImageByOwnerId(id, file_name)
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
