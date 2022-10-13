import { ImagePostService } from 'src/modules/rest-files/services/PostServices/post_image.service'
import {  Module } from '@nestjs/common'
import { ForPostService } from './for-post.service'
import { AudioPostService } from 'src/modules/rest-files/services/PostServices/post_audio.service'
import { VideoPostService } from 'src/modules/rest-files/services/PostServices/post_video.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AudioPostEntity } from 'src/modules/rest-files/entities/entities-for-posts/audio_post.entity'
import { ImagePostEntity } from 'src/modules/rest-files/entities/entities-for-posts/image_post.entity'
import { VideoPostEntity } from 'src/modules/rest-files/entities/entities-for-posts/video_post.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      VideoPostEntity,
      ImagePostEntity,
      AudioPostEntity,
    ]),
  ],

  providers: [
    ForPostService,
    ImagePostService,
    VideoPostService,
    AudioPostService,
  ],
  exports: [
    ForPostService,
    ImagePostService,
    VideoPostService,
    AudioPostService,
  ],
})
export class ForPostModule {}
