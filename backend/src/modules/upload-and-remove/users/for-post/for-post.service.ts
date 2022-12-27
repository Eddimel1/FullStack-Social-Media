import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Base_Upload_Remove_Service } from 'src/generics/generic-services/base-upload.service'
import { Audio_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/PostServices/post_audio.service'
import { Image_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/PostServices/post_image.service'
import { Video_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/PostServices/post_video.service'
import { PostFoldersT_U } from 'src/modules/rest-files/types/user-types'

const storageP = '../../../../storage'
@Injectable()
export class ForPostService_U extends Base_Upload_Remove_Service<
  Image_F_Post_Service_U,
  Video_F_Post_Service_U,
  Audio_F_Post_Service_U,
  PostFoldersT_U
> {
  constructor(
    private readonly image_F_PostService_U: Image_F_Post_Service_U,
    private readonly video_F_PostService_U: Video_F_Post_Service_U,
    private readonly audio_F_PostService_U: Audio_F_Post_Service_U,
    configService: ConfigService,
  ) {
    super(configService, storageP)
  }

  async _invokeAppropriateService_Up(
    id: number,
    folder: string,
    file_name: string,
    url: string,
    parent_of_owner_id?: number,
  ) {
    console.log('FOLDER : ', folder, 'ID : ', id)
    const relation = folder as PostFoldersT_U
    switch (relation) {
      case 'image_f_post_u': {
        return await this.image_F_PostService_U.insertOne(
          id,
          url,
          file_name,
          'image_f_post_u',
          parent_of_owner_id,
        )
      }
      case 'video_f_post_u': {
        return await this.video_F_PostService_U.insertOne(
          id,
          url,
          file_name,
          'video_f_post_u',
          parent_of_owner_id,
        )
      }
      case 'audio_f_post_u': {
        return await this.audio_F_PostService_U.insertOne(
          id,
          url,
          file_name,
          'audio_f_post_g',
          parent_of_owner_id,
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
    const relation = folder as PostFoldersT_U
    switch (relation) {
      case 'image_f_post_u': {
        return await this.image_F_PostService_U.deleteOneByOwnerId(
          id,
          file_name,
          'image_f_post_g',
        )
      }
      case 'video_f_post_u': {
        return await this.video_F_PostService_U.deleteOneByOwnerId(
          id,
          file_name,
          'video_f_post_u',
        )
      }
      case 'audio_f_post_u': {
        return await this.audio_F_PostService_U.deleteOneByOwnerId(
          id,
          file_name,
          'audio_f_post_u',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
