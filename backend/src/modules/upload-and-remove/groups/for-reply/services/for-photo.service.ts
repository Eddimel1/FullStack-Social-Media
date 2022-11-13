import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Base_Upload_Remove_Service } from 'src/generics/generic-services/base-upload.service'
import { Audio_F_Reply_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-photo-services/audio.service'
import { Image_F_Reply_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-photo-services/image.service'
import { Video_F_Reply_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-photo-services/video.service'
import { Reply_F_Photo_G } from 'src/modules/rest-files/types/group-types'
import { Comment_F_Photo_U } from 'src/modules/rest-files/types/user-types'

const storageP = '../../storage'

@Injectable()
export class ReplyForPhotoService_G extends Base_Upload_Remove_Service<
  Image_F_Reply_F_Photo_Service_G,
  Video_F_Reply_F_Photo_Service_G,
  Audio_F_Reply_F_Photo_Service_G,
  Reply_F_Photo_G
> {
  constructor(
    private readonly image_F_Reply_F_Photo_Service_G: Image_F_Reply_F_Photo_Service_G,
    private readonly video_F_Reply_F_Photo_Service_G: Video_F_Reply_F_Photo_Service_G,
    private readonly audio_F_Reply_F_Photo_Service_G: Audio_F_Reply_F_Photo_Service_G,
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
    userId?: number,
  ) {
    console.log('FOLDER : ', folder)
    const relation = folder as Reply_F_Photo_G
    switch (relation) {
      case 'image_f_reply_f_photo_g': {
        return await this.image_F_Reply_F_Photo_Service_G.insertOne(
          id,
          url,
          file_name,
          'image_f_reply_f_photo_g',
          parent_of_owner_id,
          userId,
        )
      }
      case 'video_f_reply_f_photo_g': {
        return await this.video_F_Reply_F_Photo_Service_G.insertOne(
          id,
          url,
          file_name,
          'video_f_reply_f_photo_g',
          parent_of_owner_id,
          userId,
        )
      }
      case 'audio_f_reply_f_photo_g': {
        return await this.audio_F_Reply_F_Photo_Service_G.insertOne(
          id,
          url,
          file_name,
          'audio_f_reply_f_photo_g',
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
    const relation = folder as Reply_F_Photo_G
    switch (relation) {
      case 'image_f_reply_f_photo_g': {
        return await this.image_F_Reply_F_Photo_Service_G.deleteOneByOwnerId(
          id,
          file_name,
          'image_f_reply_f_photo_g',
        )
      }
      case 'video_f_reply_f_photo_g': {
        return await this.video_F_Reply_F_Photo_Service_G.deleteOneByOwnerId(
          id,
          file_name,
          'video_f_reply_f_photo_g',
        )
      }
      case 'audio_f_reply_f_photo_g': {
        return await this.audio_F_Reply_F_Photo_Service_G.deleteOneByOwnerId(
          id,
          file_name,
          'audio_f_reply_f_photo_g',
        )
      }

      default:
        throw new Error('was provided the not existing relation')
    }
  }
}
