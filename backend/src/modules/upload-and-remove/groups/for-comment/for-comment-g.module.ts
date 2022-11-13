import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentForPhotoEntity_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'
import { CommentForPostEntity_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'
import { CommentForVideoEntity_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
import { Audio_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-photo.entity'
import { Audio_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-post.entity'
import { Audio_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-photo.entity'
import { Image_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-post.entity'
import { Image_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-video.entity'
import { Video_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-photo.entity'
import { Video_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-post.entity'
import { Video_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-video.entity'
import { Audio_F_Comment_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-photo-services/audio.service'
import { Image_F_Comment_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-photo-services/image.service'
import { Video_F_Comment_F_Photo_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-photo-services/video.service'
import { Audio_F_Comment_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-posts-services/audio.service'
import { Image_F_Comment_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-posts-services/image.service'
import { Video_F_Comment_F_Post_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-posts-services/video.service'
import { Audio_F_Comment_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-video-services/audio.service'
import { Image_F_Comment_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-video-services/image.service'
import { Video_F_Comment_F_Video_Service_G } from 'src/modules/rest-files/services/for-groups/CommentServices/for-video-services/video.service'
import { CommentForPhotoService_G } from './services/for-photo.service'
import { CommentForPostService_G } from './services/for-post.service'
import { CommentForVideoService_G } from './services/for-video.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Audio_F_Comment_F_Photo_G,
      Video_F_Comment_F_Photo_G,
      Image_F_Comment_F_Photo_G,
      Audio_F_Comment_F_Video_G,
      Video_F_Comment_F_Video_G,
      Image_F_Comment_F_Video_G,
      Audio_F_Comment_F_Post_G,
      Video_F_Comment_F_Post_G,
      Image_F_Comment_F_Post_G,
      CommentForPhotoEntity_G,
      CommentForVideoEntity_G,
      CommentForPostEntity_G,
    ]),
    ConfigModule,
  ],
  providers: [
    CommentForPhotoService_G,
    CommentForVideoService_G,
    CommentForPostService_G,
    Image_F_Comment_F_Post_Service_G,
    Video_F_Comment_F_Post_Service_G,
    Audio_F_Comment_F_Post_Service_G,
    Image_F_Comment_F_Photo_Service_G,
    Video_F_Comment_F_Photo_Service_G,
    Audio_F_Comment_F_Photo_Service_G,
    Image_F_Comment_F_Video_Service_G,
    Video_F_Comment_F_Video_Service_G,
    Audio_F_Comment_F_Video_Service_G,
  ],
  exports: [
    CommentForPhotoService_G,
    CommentForVideoService_G,
    CommentForPostService_G,
    Image_F_Comment_F_Post_Service_G,
    Video_F_Comment_F_Post_Service_G,
    Audio_F_Comment_F_Post_Service_G,
    Image_F_Comment_F_Photo_Service_G,
    Video_F_Comment_F_Photo_Service_G,
    Audio_F_Comment_F_Photo_Service_G,
    Image_F_Comment_F_Video_Service_G,
    Video_F_Comment_F_Video_Service_G,
    Audio_F_Comment_F_Video_Service_G,
  ],
})
export class ForCommentModule_G {}
