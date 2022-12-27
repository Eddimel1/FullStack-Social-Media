import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ReplyForPhoto_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
import { ReplyForPost_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'
import { ReplyForVideo_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { Audio_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-photo.entity'
import { Audio_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-post.entity'
import { Audio_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-post.entity'
import { Image_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-reply-f.entity'
import { Image_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-video.entity'
import { Video_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-photo.entity'
import { Video_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-post.entity'
import { Video_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-video.entity'
import { Audio_F_Reply_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-photo-services/audio.service'
import { Image_F_Reply_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-photo-services/image.service'
import { Video_F_Reply_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-photo-services/video.service'
import { Audio_F_Reply_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-posts-services/audio.service'
import { Image_F_Reply_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-posts-services/image.service'
import { Video_F_Reply_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-posts-services/video.service'
import { Audio_F_Reply_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-video-services/audio.service'
import { Image_F_Reply_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-video-services/image.service'
import { Video_F_Reply_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/ReplyServices/for-video-services/video.service'
import { ReplyForPhotoService_G } from './services/for-photo.service'
import { ReplyForPostService_G } from './services/for-post.service'
import { ReplyForVideoService_G } from './services/for-video.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Audio_F_Reply_F_Photo_G,
      Video_F_Reply_F_Photo_G,
      Image_F_Reply_F_Photo_G,
      Audio_F_Reply_F_Video_G,
      Video_F_Reply_F_Video_G,
      Image_F_Reply_F_Video_G,
      Audio_F_Reply_F_Post_G,
      Video_F_Reply_F_Post_G,
      Image_F_Reply_F_Post_G,
      ReplyForPhoto_G,
      ReplyForVideo_G,
      ReplyForPost_G,
    ]),
    ConfigModule,
  ],
  providers: [
    ReplyForPhotoService_G,
    ReplyForVideoService_G,
    ReplyForPostService_G,
    Image_F_Reply_F_Post_Service_G,
    Video_F_Reply_F_Post_Service_G,
    Audio_F_Reply_F_Post_Service_G,
    Image_F_Reply_F_Photo_Service_G,
    Video_F_Reply_F_Photo_Service_G,
    Audio_F_Reply_F_Photo_Service_G,
    Image_F_Reply_F_Video_Service_G,
    Video_F_Reply_F_Video_Service_G,
    Audio_F_Reply_F_Video_Service_G,
  ],
  exports: [
    ReplyForPhotoService_G,
    ReplyForVideoService_G,
    ReplyForPostService_G,
    Image_F_Reply_F_Post_Service_G,
    Video_F_Reply_F_Post_Service_G,
    Audio_F_Reply_F_Post_Service_G,
    Image_F_Reply_F_Photo_Service_G,
    Video_F_Reply_F_Photo_Service_G,
    Audio_F_Reply_F_Photo_Service_G,
    Image_F_Reply_F_Video_Service_G,
    Video_F_Reply_F_Video_Service_G,
    Audio_F_Reply_F_Video_Service_G,
  ],
})
export class ForReplyModule_G {}
