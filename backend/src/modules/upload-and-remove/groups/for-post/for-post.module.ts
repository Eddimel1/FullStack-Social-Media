import { Video_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/video_post.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Audio_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/audio_post.entity'
import { Image_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/image_post.entity'
import { Audio_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/PostServices/post_audio.service'
import { Image_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/PostServices/post_image.service'
import { Video_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/PostServices/post_video.service'
import { ForPostService_G } from './for-post.service'
import { PostEntity_G } from 'src/modules/posts/group/entities/posts-for-group.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Video_F_Post_G,
      Audio_F_Post_G,
      Image_F_Post_G,
      PostEntity_G,
    ]),
  ],

  providers: [
    ForPostService_G,
    Video_F_Post_Service_G,
    Audio_F_Post_Service_G,
    Image_F_Post_Service_G,
  ],
  exports: [
    ForPostService_G,
    Video_F_Post_Service_G,
    Audio_F_Post_Service_G,
    Image_F_Post_Service_G,
  ],
})
export class ForPostModule {}
