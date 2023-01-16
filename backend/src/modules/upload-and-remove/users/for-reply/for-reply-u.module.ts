import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ReplyForPhoto_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'
import { ReplyForPost_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
import { ReplyForVideo_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'
import { Audio_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-photo.entity'
import { Audio_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-post.entity'
import { Audio_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-post.entity'

import { Image_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-video.entity'
import { Video_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-photo.entity'
import { Video_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-post.entity'
import { Video_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-video.entity'
import { Audio_F_Reply_F_Photo_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-photo-services/audio.service'
import { Image_F_Reply_F_Photo_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-photo-services/image.service'
import { Video_F_Reply_F_Photo_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-photo-services/video.service'
import { Audio_F_Reply_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-posts-services/audio.service'
import { Image_F_Reply_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-posts-services/image.service'
import { Video_F_Reply_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-posts-services/video.service'
import { Audio_F_Reply_F_Video_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-video-services/audio.service'
import { Image_F_Reply_F_Video_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-video-services/image.service'
import { Video_F_Reply_F_Video_Service_U } from 'src/modules/rest-files/services/for-users/ReplyServices/for-video-services/video.service'
import { Image_F_Reply_F_Photo_U } from '../../../rest-files/entities/users/entities-for-replies/image-f-photo.entity'
import { ReplyForPhotoService_U } from './services/for-photo.service'
import { ReplyForPostService_U } from './services/for-post.service'
import { ReplyForVideoService_U } from './services/for-video.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Audio_F_Reply_F_Photo_U,
      Video_F_Reply_F_Photo_U,
      Image_F_Reply_F_Photo_U,
      Audio_F_Reply_F_Video_U,
      Video_F_Reply_F_Video_U,
      Image_F_Reply_F_Video_U,
      Audio_F_Reply_F_Post_U,
      Video_F_Reply_F_Post_U,
      Image_F_Reply_F_Post_U,
      ReplyForPhoto_U,
      ReplyForVideo_U,
      ReplyForPost_U,
    ]),
    ConfigModule,
  ],
  providers: [
    ReplyForPhotoService_U,
    ReplyForVideoService_U,
    ReplyForPostService_U,
    Image_F_Reply_F_Post_Service_U,
    Video_F_Reply_F_Post_Service_U,
    Audio_F_Reply_F_Post_Service_U,
    Image_F_Reply_F_Photo_Service_U,
    Video_F_Reply_F_Photo_Service_U,
    Audio_F_Reply_F_Photo_Service_U,
    Image_F_Reply_F_Video_Service_U,
    Video_F_Reply_F_Video_Service_U,
    Audio_F_Reply_F_Video_Service_U,
  ],
  exports: [
    ReplyForPhotoService_U,
    ReplyForVideoService_U,
    ReplyForPostService_U,
    Image_F_Reply_F_Post_Service_U,
    Video_F_Reply_F_Post_Service_U,
    Audio_F_Reply_F_Post_Service_U,
    Image_F_Reply_F_Photo_Service_U,
    Video_F_Reply_F_Photo_Service_U,
    Audio_F_Reply_F_Photo_Service_U,
    Image_F_Reply_F_Video_Service_U,
    Video_F_Reply_F_Video_Service_U,
    Audio_F_Reply_F_Video_Service_U,
  ],
})
export class ForReplyModule_U {}
