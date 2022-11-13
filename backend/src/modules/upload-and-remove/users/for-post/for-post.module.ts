import { Video_F_Post_U } from './../../../rest-files/entities/users/entities-for-posts/video_post.entity'
import { Module } from '@nestjs/common'
import { ForPostService_U } from './for-post.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Audio_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/audio_post.entity'
import { Image_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/image_post.entity'
import { Audio_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/PostServices/post_audio.service'
import { Image_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/PostServices/post_image.service'
import { Video_F_Post_Service_U } from 'src/modules/rest-files/services/for-users/PostServices/post_video.service'
import { PostEntity_U } from 'src/modules/posts/user/entities/post.entity'


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Video_F_Post_U,
      Image_F_Post_U,
      Audio_F_Post_U,
      PostEntity_U,
    ]),
  ],

  providers: [
    ForPostService_U,
    Video_F_Post_Service_U,
    Image_F_Post_Service_U,
    Audio_F_Post_Service_U,
  ],
  exports: [
    ForPostService_U,
    Video_F_Post_Service_U,
    Image_F_Post_Service_U,
    Audio_F_Post_Service_U,
  ],
})
export class ForPostModule {}
