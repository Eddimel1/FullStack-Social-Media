import { ConfigService } from '@nestjs/config'
import { Galery_Audio_Service_G } from 'src/modules/rest-files/services/for-groups/GaleryServices/audio.service'
import { Galery_Image_Service_G } from 'src/modules/rest-files/services/for-groups/GaleryServices/image.service'
import { Galery_Video_Service_G } from 'src/modules/rest-files/services/for-groups/GaleryServices/video.service'
import { Base_Upload_Remove_Service } from 'src/generics/generic-services/base-upload.service'
import {
  PostFoldersT_G,
  GaleryFoldersT_G,
} from 'src/modules/rest-files/types/group-types'
import { Injectable } from '@nestjs/common'

const storageP = '../../storage'

@Injectable()
export class ForGaleryService_G extends Base_Upload_Remove_Service<
  Galery_Image_Service_G,
  Galery_Video_Service_G,
  Galery_Audio_Service_G,
  PostFoldersT_G
> {
  constructor(
    private readonly galeryImageService_G: Galery_Image_Service_G,
    private readonly galeryVideoService_G: Galery_Video_Service_G,
    private readonly galeryAudioService_G: Galery_Audio_Service_G,
    configService: ConfigService,
  ) {
    super(configService, storageP)
  }

  async _invokeAppropriateService_Up(
    mainId: number,
    ownerId: number,
    folder: string,
    file_name: string,
    url: string,
  ) {
    console.log('FOLDER : ', folder)
    const relation = folder as GaleryFoldersT_G
    switch (relation) {
      case 'galery_images_g': {
        return await this.galeryImageService_G.insertOne(
          mainId,
          ownerId,
          url,
          file_name,
          'galery_images_g',
        )
      }
      case 'galery_videos_g': {
        return await this.galeryVideoService_G.insertOne(
          mainId,
          ownerId,
          url,
          file_name,
          'galery_videos_g',
        )
      }
      case 'galery_audios_g': {
        return await this.galeryAudioService_G.insertOne(
          mainId,
          ownerId,
          url,
          file_name,
          'galery_audios_g',
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
    const relation = folder as GaleryFoldersT_G
    switch (relation) {
      case 'galery_images_g': {
        return await this.galeryImageService_G.deleteOneByOwnerId(
          id,
          file_name,
          'galery_images_g',
        )
      }
      case 'galery_videos_g': {
        return await this.galeryVideoService_G.deleteOneByOwnerId(
          id,
          file_name,
          'galery_videos_g',
        )
      }
      case 'galery_audios_g': {
        return await this.galeryAudioService_G.deleteOneByOwnerId(
          id,
          file_name,
          'galery_audios_g',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
