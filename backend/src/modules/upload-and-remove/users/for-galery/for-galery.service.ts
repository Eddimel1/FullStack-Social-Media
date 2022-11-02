import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Base_Upload_Remove_Service } from 'src/generic-services/base-upload.service'
import { Galery_Audio_Service_U } from 'src/modules/rest-files/services/for-users/GaleryServices/audio.service'
import { Galery_Image_Service_U } from 'src/modules/rest-files/services/for-users/GaleryServices/image.service'
import { Galery_Video_Service_U } from 'src/modules/rest-files/services/for-users/GaleryServices/video.service'
import { GaleryFoldersT_U } from 'src/modules/rest-files/types/user-types'

const storageP = '../../storage'

@Injectable()
export class ForGaleryService_U extends Base_Upload_Remove_Service<
  Galery_Image_Service_U,
  Galery_Video_Service_U,
  Galery_Audio_Service_U,
  GaleryFoldersT_U
> {
  constructor(
    private readonly galeryImageService_U: Galery_Image_Service_U,
    private readonly galeryVideoService_U: Galery_Video_Service_U,
    private readonly galeryAudioService_U: Galery_Audio_Service_U,
    configService: ConfigService,
  ) {
    super(configService, storageP)
  }

  async _invokeAppropriateService_Up(
    id: number,
    folder: string,
    file_name: string,
    url: string,
  ) {
    console.log('FOLDER : ', folder)
    const relation = folder as GaleryFoldersT_U
    switch (relation) {
      case 'galery_images_u': {
        return await this.galeryImageService_U.insertOne(
          id,
          url,
          file_name,
          'galery_images_u',
        )
      }
      case 'galery_videos_u': {
        return await this.galeryVideoService_U.insertOne(
          id,
          url,
          file_name,
          'galery_videos_u',
        )
      }
      case 'galery_audios_u': {
        return await this.galeryAudioService_U.insertOne(
          id,
          url,
          file_name,
          'galery_audios_u',
        )
      }

      default:
        throw new Error('was provided  not existing relation')
    }
  }
  async _invokeAppropriateService_Del(
    id: number,
    folder: string,
    file_name: string,
  ) {
    const relation = folder as GaleryFoldersT_U
    switch (relation) {
      case 'galery_images_u': {
        return await this.galeryImageService_U.deleteOneByOwnerId(
          id,
          file_name,
          'galery_images_u',
        )
      }
      case 'galery_videos_u': {
        return await this.galeryVideoService_U.deleteOneByOwnerId(
          id,
          file_name,
          'galery_videos_u',
        )
      }
      case 'galery_audios_u': {
        return await this.galeryAudioService_U.deleteOneByOwnerId(
          id,
          file_name,
          'galery_audios_u',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}

