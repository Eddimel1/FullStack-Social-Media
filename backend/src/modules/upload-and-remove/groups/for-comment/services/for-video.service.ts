import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Base_Upload_Remove_Service } from 'src/generics/generic-services/base-upload.service'
import { Audio_F_Comment_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-video-services/audio.service'
import { Image_F_Comment_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-video-services/image.service'
import { Video_F_Comment_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-video-services/video.service'
import { Comment_F_Video_G } from 'src/modules/rest-files/types/group-types'

const storageP = '../../storage'
@Injectable()
export class CommentForVideoService_G extends Base_Upload_Remove_Service<
  Image_F_Comment_F_Video_Service_G,
  Video_F_Comment_F_Video_Service_G,
  Audio_F_Comment_F_Video_Service_G,
  Comment_F_Video_G
> {
  constructor(
    private readonly postImageService_G: Image_F_Comment_F_Video_Service_G,
    private readonly postVideoService_G: Video_F_Comment_F_Video_Service_G,
    private readonly postAudioService_G: Audio_F_Comment_F_Video_Service_G,
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
    parent_of_owner_id?: number,
    userId?: number,
  ) {
    console.log('FOLDER : ', folder)
    const relation = folder as Comment_F_Video_G
    switch (relation) {
      case 'image_f_comment_f_video_g': {
        return await this.postImageService_G.insertOne(
          mainId,
          ownerId,
          url,
          file_name,
          'image_f_comment_f_video_g',
          parent_of_owner_id,
          userId,
        )
      }
      case 'video_f_comment_f_video_g': {
        return await this.postVideoService_G.insertOne(
          mainId,
          ownerId,
          url,
          file_name,
          'video_f_comment_f_video_g',
          parent_of_owner_id,
          userId,
        )
      }
      case 'audio_f_comment_f_video_g': {
        return await this.postAudioService_G.insertOne(
          mainId,
          ownerId,
          url,
          file_name,
          'audio_f_comment_f_video_g',
          parent_of_owner_id,
          userId,
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
    const relation = folder as Comment_F_Video_G
    switch (relation) {
      case 'image_f_comment_f_video_g': {
        return await this.postImageService_G.deleteOneByOwnerId(
          id,
          file_name,
          'image_f_comment_f_video_g',
        )
      }
      case 'video_f_comment_f_video_g': {
        return await this.postVideoService_G.deleteOneByOwnerId(
          id,
          file_name,
          'video_f_comment_f_video_g',
        )
      }
      case 'audio_f_comment_f_video_g': {
        return await this.postAudioService_G.deleteOneByOwnerId(
          id,
          file_name,
          'audio_f_comment_f_video_g',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
