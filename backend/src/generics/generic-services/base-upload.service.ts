import { ensureDir, writeFile, pathExists, remove } from 'fs-extra'
import * as path from 'path'
import { ConfigService } from '@nestjs/config'
import { Base_Upload_Service } from 'src/generics/generic-interfaces/base-upload-interface'
import {
  NotValidFileFormat,
  WasNotDeleted_EX,
} from 'src/global/exceptions/file-exceptions'
import {
  validateMimeType,
  mimeTypeMapper,
} from 'src/modules/upload-and-remove/utility'
import * as crypto from 'crypto'
import { File_EN_Delete_O } from 'src/global/globalDtos/output.dto'

// modify flow for upload/db-insert
// what if insertion into db  was not successful , but folders are already created and file is inserted?
export abstract class Base_Upload_Remove_Service<T1, T2, T3, F>
  implements Base_Upload_Service<T1, T2, T3, F>
{
  storagePath: string
  constructor(
    private readonly configService: ConfigService,
    storagePath: string,
  ) {
    this.storagePath = storagePath
  }

  async uploadFile(
    file: Express.Multer.File,
    folder: F,
    type: 'groups' | 'users',
    mainId: number,
    ownerId?: number,
    parentOfOwnerId?: number,
    userId?: number,
  ): Promise<T1 | T2 | T3> {
    console.log(file)
    if (!validateMimeType(mimeTypeMapper(file.mimetype))) {
      throw new NotValidFileFormat()
    } else {
      const path0 = path.join(`storage/${type}`)
      const path1 = path.join(`storage/${type}/${mainId}`)
      const path2 = path.join(`storage/${type}/${mainId}/${folder}`)
      console.log(path2)
      const file_extension = file.mimetype.split('/')[1]
      const fileName = `${crypto.randomUUID()}.${file_extension}`
      const full_relative_path = `storage/${type}/${mainId}/${folder}/${fileName}`
      console.log(full_relative_path)
      await ensureDir(path0, (err) => console.log(err))
      await ensureDir(path1, (err) => console.log(err))
      await ensureDir(path2, (err) => console.log(err))

      await writeFile(`${full_relative_path}`, file.buffer)
      const url = `${this.configService.get(
        'BASE_URL',
      )}/${type}/${mainId}/${folder}/${fileName}`

      return await this._invokeAppropriateService_Up(
        ownerId || mainId,
        folder,
        fileName,
        url,
        parentOfOwnerId,
        userId,
      )
    }
  }
  async removeFile(
    file_name: string,
    folder: F,
    type: 'groups' | 'users',
    mainId: number,
    ownerId?: number,
  ): Promise<File_EN_Delete_O> {
    const full_relative_path = `${type}/${mainId}/${folder}/${file_name}`
    const _path = path.join(`storage/${full_relative_path}`)
    console.log(_path)
    const exists = await pathExists(_path)
    if (exists) {
      remove(_path, (err) => console.log('was not removed'))
      return this._invokeAppropriateService_Del(
        ownerId || mainId,
        folder,
        file_name,
      )
    } else throw new WasNotDeleted_EX(folder as any)
  }

  abstract _invokeAppropriateService_Up(
    id: number,
    folder: F,
    file_name: string,
    url: string,
    parentOfOwnerId: number,
    userId?: number,
  )

  abstract _invokeAppropriateService_Del(
    id: number,
    folder: F,
    file_name: string,
  )
}
