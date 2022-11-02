import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Audio_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/PostServices/post_audio.service'
import { Image_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/PostServices/post_image.service'
import { Video_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/PostServices/post_video.service'
import { PostFoldersT_G } from 'src/modules/rest-files/types/group-types'

import { Base_Upload_Remove_Service } from 'src/generic-services/base-upload.service'

const storageP = '../../storage'
@Injectable()
export class ForPostService_G extends Base_Upload_Remove_Service<
  Image_F_Post_Service_G,
  Video_F_Post_Service_G,
  Audio_F_Post_Service_G,
  PostFoldersT_G
> {
  constructor(
    private readonly image_F_PostService_G: Image_F_Post_Service_G,
    private readonly video_F_PostService_G: Video_F_Post_Service_G,
    private readonly audio_F_PostService_G: Audio_F_Post_Service_G,
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
    const relation = folder as PostFoldersT_G
    switch (relation) {
      case 'image_f_post_g': {
        return await this.image_F_PostService_G.insertOne(
          id,
          url,
          file_name,
          'image_f_post_g',
        )
      }
      case 'video_f_post_g': {
        return await this.video_F_PostService_G.insertOne(
          id,
          url,
          file_name,
          'video_f_post_g',
        )
      }
      case 'audio_f_post_g': {
        return await this.audio_F_PostService_G.insertOne(
          id,
          url,
          file_name,
          'audio_f_post_g',
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
    const relation = folder as PostFoldersT_G
    switch (relation) {
      case 'image_f_post_g': {
        return await this.image_F_PostService_G.deleteOneByOwnerId(
          id,
          file_name,
          'image_f_post_g',
        )
      }
      case 'video_f_post_g': {
        return await this.video_F_PostService_G.deleteOneByOwnerId(
          id,
          file_name,
          'video_f_post_g',
        )
      }
      case 'audio_f_post_g': {
        return await this.audio_F_PostService_G.deleteOneByOwnerId(
          id,
          file_name,
          'audio_f_post_g',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
