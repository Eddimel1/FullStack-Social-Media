import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Base_Upload_Remove_Service } from 'src/generic-services/base-upload.service'
import { Audio_F_Comment_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/CommentServices/for-posts-services/audio.service'
import { Image_F_Comment_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/CommentServices/for-posts-services/image.service'
import { Video_F_Comment_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/CommentServices/for-posts-services/video.service'
import { Comment_F_POST_U } from 'src/modules/rest-files/types/user-types'

const storageP = '../../storage'
@Injectable()
export class CommentForPostService_U extends Base_Upload_Remove_Service<
  Image_F_Comment_F_Post_Service_U,
  Video_F_Comment_F_Post_Service_U,
  Audio_F_Comment_F_Post_Service_U,
  Comment_F_POST_U
> {
  constructor(
    private readonly postImageService_U: Image_F_Comment_F_Post_Service_U,
    private readonly postVideoService_U: Video_F_Comment_F_Post_Service_U,
    private readonly postAudioService_U: Audio_F_Comment_F_Post_Service_U,
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
    const relation = folder as Comment_F_POST_U
    switch (relation) {
      case 'image_f_comment_f_post_u': {
        return await this.postImageService_U.insertOne(
          id,
          url,
          file_name,
          'image_f_comment_f_post_u',
        )
      }
      case 'video_f_comment_f_post_u': {
        return await this.postVideoService_U.insertOne(
          id,
          url,
          file_name,
          'video_f_comment_f_post_u',
        )
      }
      case 'audio_f_comment_f_post_u': {
        return await this.postAudioService_U.insertOne(
          id,
          url,
          file_name,
          'audio_f_comment_f_post_u',
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
    const relation = folder as Comment_F_POST_U
    switch (relation) {
      case 'image_f_comment_f_post_u': {
        return await this.postImageService_U.deleteOneByOwnerId(
          id,
          file_name,
          'image_f_comment_f_post_u',
        )
      }
      case 'video_f_comment_f_post_u': {
        return await this.postVideoService_U.deleteOneByOwnerId(
          id,
          file_name,
          'video_f_comment_f_post_u',
        )
      }
      case 'audio_f_comment_f_post_u': {
        return await this.postAudioService_U.deleteOneByOwnerId(
          id,
          file_name,
          'audio_f_comment_f_post_u',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}


