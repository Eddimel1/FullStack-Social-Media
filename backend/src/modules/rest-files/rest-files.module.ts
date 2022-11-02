import { Galery_Audio_G } from './entities/groups/galery-entities/audio.entity'

import { ConfigModule, ConfigService } from '@nestjs/config'
import { UserService } from 'src/modules/user/services/user.service'
import { UserEntity } from 'src/modules/user/entities/user.entity'

import { UserModule } from './../user/user.module'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ForCommentModule } from '../upload-and-remove/users/for-comment/for-comment.module'
import { ForGaleryModule } from '../upload-and-remove/users/for-galery/for-galery.module'
import { ForPostModule } from '../upload-and-remove/users/for-post/for-post.module'

import { CommentModule } from '../comments-for-user/comment.module'

import { Audio_F_Comment_F_Photo_G } from './entities/groups/entitites-for-comments/audio-f-photo.entity'
import { Image_F_Comment_F_Photo_G } from './entities/groups/entitites-for-comments/image-f-photo.entity'
import { Video_F_Comment_F_Photo_G } from './entities/groups/entitites-for-comments/video-f-photo.entity'
import { Audio_F_Post_G } from './entities/groups/entities-for-posts/audio_post.entity'
import { Image_F_Post_G } from './entities/groups/entities-for-posts/image_post.entity'
import { Video_F_Post_G } from './entities/groups/entities-for-posts/video_post.entity'
import { Galery_Image_G } from './entities/groups/galery-entities/image.entity'
import { Galery_Video_G } from './entities/groups/galery-entities/video.entity'
import { Audio_F_Post_U } from './entities/users/entities-for-posts/audio_post.entity'
import { Image_F_Post_U } from './entities/users/entities-for-posts/image_post.entity'
import { Video_F_Post_U } from './entities/users/entities-for-posts/video_post.entity'
import { Galery_Audio_U } from './entities/users/galery-entities/audio.entity'
import { Galery_Image_U } from './entities/users/galery-entities/image.entity'
import { Galery_Video_U } from './entities/users/galery-entities/video.entity'

import { Audio_F_Comment_F_Post_G } from './entities/groups/entitites-for-comments/audio-f-post.entity'
import { Image_F_Comment_F_Post_G } from './entities/groups/entitites-for-comments/image-f-post.entity'
import { Video_F_Comment_F_Post_G } from './entities/groups/entitites-for-comments/video-f-post.entity'
import { Audio_F_Comment_F_Video_G } from './entities/groups/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Video_G } from './entities/groups/entitites-for-comments/image-f-video.entity'
import { Video_F_Comment_F_Video_G } from './entities/groups/entitites-for-comments/video-f-video.entity'
import { Galery_Audio_Service_G } from './services/for-groups/GaleryServices/audio.service'
import { Galery_Image_Service_G } from './services/for-groups/GaleryServices/image.service'
import { Galery_Video_Service_G } from './services/for-groups/GaleryServices/video.service'
import { Audio_F_Post_Service_G } from './services/for-groups/PostServices/post_audio.service'
import { Image_F_Post_Service_G } from './services/for-groups/PostServices/post_image.service'
import { Video_F_Post_Service_G } from './services/for-groups/PostServices/post_video.service'
import { Galery_Audio_Service_U } from './services/for-users/GaleryServices/audio.service'
import { Galery_Image_Service_U } from './services/for-users/GaleryServices/image.service'
import { Galery_Video_Service_U } from './services/for-users/GaleryServices/video.service'
import { Audio_F_Post_Service_U } from './services/for-users/PostServices/post_audio.service'
import { Image_F_Post_Service_U } from './services/for-users/PostServices/post_image.service'
import { Video_F_Post_Service_U } from './services/for-users/PostServices/post_video.service'
import { Audio_F_Comment_F_Photo_U } from './entities/users/entitites-for-comments/audio-f-photo.entity'
import { Audio_F_Comment_F_Post_U } from './entities/users/entitites-for-comments/audio-f-post.entity'
import { Audio_F_Comment_F_Video_U } from './entities/users/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Photo_U } from './entities/users/entitites-for-comments/image-f-photo.entity'
import { Image_F_Comment_F_Post_U } from './entities/users/entitites-for-comments/image-f-post.entity'
import { Image_F_Comment_F_Video_U } from './entities/users/entitites-for-comments/image-f-video.entity'
import { Video_F_Comment_F_Photo_U } from './entities/users/entitites-for-comments/video-f-photo.entity'
import { Video_F_Comment_F_Post_U } from './entities/users/entitites-for-comments/video-f-post.entity'
import { Video_F_Comment_F_Video_U } from './entities/users/entitites-for-comments/video-f-video.entity'
import { GaleryFilesController_G } from './controllers/groups/galery-files.controller'
import { ForGaleryService_G } from '../upload-and-remove/groups/for-galery/for-galery.service'
import { ForPostService_G } from '../upload-and-remove/groups/for-post/for-post.service'
import { ForGaleryService_U } from '../upload-and-remove/users/for-galery/for-galery.service'
import { ForPostService_U } from '../upload-and-remove/users/for-post/for-post.service'
import { PostFilesController_G } from './controllers/groups/post-files.controller'
import { GaleryFilesController_U } from './controllers/users/galery-files.controller'
import { PostFilesController_U } from './controllers/users/post-files.controller'
import { Comment_F_Photo_Controller_G } from './controllers/groups/for-comment-controllers/comment-f-photo.controller'
import { Comment_F_Post_Controller_G } from './controllers/groups/for-comment-controllers/comment-f-post.controller'
import { Comment_F_Video_Controller_G } from './controllers/groups/for-comment-controllers/comment-f-video.controller'
import { Comment_F_Photo_Controller_U } from './controllers/users/comment-controllers/comment-f-photo.controller'
import { Comment_F_Post_Controller_U } from './controllers/users/comment-controllers/comment-f-post.controller'
import { Comment_F_Video_Controller_U } from './controllers/users/comment-controllers/comment-f-video.controller'

@Module({
  controllers: [
    PostFilesController_U,
    PostFilesController_G,
    GaleryFilesController_U,
    GaleryFilesController_G,
    Comment_F_Video_Controller_U,
    Comment_F_Post_Controller_U,
    Comment_F_Photo_Controller_U,
    Comment_F_Video_Controller_G,
    Comment_F_Post_Controller_G,
    Comment_F_Photo_Controller_G,
  ],
  providers: [
    UserService,
    ConfigService,
    ForPostService_U,
    ForPostService_G,
    ForGaleryService_U,
    ForGaleryService_G,
    Galery_Image_Service_U,
    Galery_Image_Service_G,
    Galery_Audio_Service_U,
    Galery_Audio_Service_G,
    Galery_Video_Service_U,
    Galery_Video_Service_G,
    Audio_F_Post_Service_G,
    Audio_F_Post_Service_U,
    Video_F_Post_Service_U,
    Video_F_Post_Service_G,
    Image_F_Post_Service_U,
    Image_F_Post_Service_G,
  ],
  imports: [
    UserModule,
    ConfigModule,
    ForCommentModule,
    ForPostModule,
    ForGaleryModule,
    CommentModule,
    TypeOrmModule.forFeature([
      UserEntity,
      Audio_F_Post_U,
      Audio_F_Post_G,
      Video_F_Post_U,
      Video_F_Post_G,
      Image_F_Post_U,
      Image_F_Post_G,
      Galery_Audio_U,
      Galery_Audio_G,
      Galery_Video_U,
      Galery_Video_G,
      Galery_Image_U,
      Galery_Image_G,
      Audio_F_Comment_F_Photo_U,
      Video_F_Comment_F_Photo_U,
      Image_F_Comment_F_Photo_U,
      Audio_F_Comment_F_Post_U,
      Image_F_Comment_F_Post_U,
      Video_F_Comment_F_Post_U,
      Audio_F_Comment_F_Video_U,
      Video_F_Comment_F_Video_U,
      Image_F_Comment_F_Video_U,
      Audio_F_Comment_F_Photo_G,
      Video_F_Comment_F_Photo_G,
      Image_F_Comment_F_Photo_G,
      Image_F_Comment_F_Post_G,
      Audio_F_Comment_F_Post_G,
      Video_F_Comment_F_Post_G,
      Audio_F_Comment_F_Video_G,
      Video_F_Comment_F_Video_G,
      Image_F_Comment_F_Video_G,
    ]),
  ],
  exports: [],
})
export class RestFilesModule {}
