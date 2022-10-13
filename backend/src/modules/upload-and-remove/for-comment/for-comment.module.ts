import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { Audio_F_Comment_F_Photo } from 'src/modules/rest-files/entities/entitites-for-comments/audio-f-photo.entity'
import { Audio_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/audio-f-post.entity'
import { Audio_F_Comment_F_Video } from 'src/modules/rest-files/entities/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Photo } from 'src/modules/rest-files/entities/entitites-for-comments/image-f-photo.entity'
import { Image_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/image-f-post.entity'
import { Image_F_Comment_F_Video } from 'src/modules/rest-files/entities/entitites-for-comments/image-f-video'
import { Video_F_Comment_F_Photo } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-photo.entity'
import { Video_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-post'
import { Video_F_Comment_F_Video } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-video'
import { AudioCommentService_F_G } from 'src/modules/rest-files/services/CommentServices/for-photo-services/audio.service'
import { ImageCommentService_F_G } from 'src/modules/rest-files/services/CommentServices/for-photo-services/image.service'
import { VideoCommentService_F_G } from 'src/modules/rest-files/services/CommentServices/for-photo-services/video.service'
import { AudioCommentService_F_P } from 'src/modules/rest-files/services/CommentServices/for-posts-services/audio.service'
import { ImageCommentService_F_P } from 'src/modules/rest-files/services/CommentServices/for-posts-services/image.service'
import { VideoCommentService_F_P } from 'src/modules/rest-files/services/CommentServices/for-posts-services/video.service'
import { AudioCommentService_F_V } from 'src/modules/rest-files/services/CommentServices/for-video-services/audio.service'
import { ImageCommentService_F_V } from 'src/modules/rest-files/services/CommentServices/for-video-services/image.service'
import { VideoCommentService_F_V } from 'src/modules/rest-files/services/CommentServices/for-video-services/video.service'
import { CommentForPhotoEntity } from 'src/modules/comment/entities/comment-for-photo.entity'
import { CommentForPostEntity } from 'src/modules/comment/entities/comment-for-post.entity'
import { CommentForVideoEntity } from 'src/modules/comment/entities/comment-for-video.entity'
import { CommentForPhotoService_U } from './services/for-photo.service'
import { CommentForPostService_U } from './services/for-post.service'
import { CommentForVideoService_U } from './services/for-video.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Audio_F_Comment_F_Photo,
      Video_F_Comment_F_Photo,
      Image_F_Comment_F_Photo,
      Audio_F_Comment_F_Video,
      Video_F_Comment_F_Video,
      Image_F_Comment_F_Video,
      Audio_F_Comment_F_Post,
      Video_F_Comment_F_Post,
      Image_F_Comment_F_Post,
      CommentForPhotoEntity,
      CommentForVideoEntity,
      CommentForPostEntity,
    ]),
    ConfigModule,
  ],
  providers: [
    CommentForPhotoService_U,
    CommentForVideoService_U,
    CommentForPostService_U,
    ImageCommentService_F_G,
    VideoCommentService_F_G,
    AudioCommentService_F_G,
    ImageCommentService_F_P,
    VideoCommentService_F_P,
    AudioCommentService_F_P,
    ImageCommentService_F_V,
    VideoCommentService_F_V,
    AudioCommentService_F_V,
  ],
  exports: [
    CommentForPhotoService_U,
    CommentForVideoService_U,
    CommentForPostService_U,
    ImageCommentService_F_G,
    VideoCommentService_F_G,
    AudioCommentService_F_G,
    ImageCommentService_F_P,
    VideoCommentService_F_P,
    AudioCommentService_F_P,
    ImageCommentService_F_V,
    VideoCommentService_F_V,
    AudioCommentService_F_V,
  ],
})
export class ForCommentModule {}
