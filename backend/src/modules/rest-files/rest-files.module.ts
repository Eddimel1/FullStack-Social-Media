import { ForGaleryService } from 'src/modules/upload-and-remove/for-galery/for-galery.service'
import { ForPostService } from 'src/modules/upload-and-remove/for-post/for-post.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UserService } from 'src/modules/user/services/user.service'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { ImageEntity } from './entities/galery-entities/image.entity'
import { UserModule } from './../user/user.module'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AudioEntity } from './entities/galery-entities/audio.entity'
import { VideoEntity } from './entities/galery-entities/video.entity'
import { AudioService } from './services/GaleryServices/audio.service'
import { AudioPostEntity } from './entities/entities-for-posts/audio_post.entity'
import { ImageService } from './services/GaleryServices/image.service'
import { VideoService } from './services/GaleryServices/video.service'
import { Comment_F_Photo_Controller } from './controllers/comment-controllers/comment-f-photo.controller'
import { GaleryFilesController } from './controllers/galery-files.controller'
import { PostFilesController } from './controllers/post-files.controller'
import { ForCommentModule } from '../upload-and-remove/for-comment/for-comment.module'
import { ForGaleryModule } from '../upload-and-remove/for-galery/for-galery.module'
import { ForPostModule } from '../upload-and-remove/for-post/for-post.module'
import { AudioPostService } from './services/PostServices/post_audio.service'
import { ImagePostService } from './services/PostServices/post_image.service'
import { VideoPostService } from './services/PostServices/post_video.service'
import { Audio_F_Comment_F_Photo } from './entities/entitites-for-comments/audio-f-photo.entity'
import { Audio_F_Comment_F_Post } from './entities/entitites-for-comments/audio-f-post.entity'
import { Audio_F_Comment_F_Video } from './entities/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Photo } from './entities/entitites-for-comments/image-f-photo.entity'
import { Image_F_Comment_F_Video } from './entities/entitites-for-comments/image-f-video'
import { Video_F_Comment_F_Photo } from './entities/entitites-for-comments/video-f-photo.entity'
import { Video_F_Comment_F_Video } from './entities/entitites-for-comments/video-f-video'
import { Image_F_Comment_F_Post } from './entities/entitites-for-comments/image-f-post.entity'
import { Video_F_Comment_F_Post } from './entities/entitites-for-comments/video-f-post'
import { ImagePostEntity } from './entities/entities-for-posts/image_post.entity'
import { VideoPostEntity } from './entities/entities-for-posts/video_post.entity'
import { Comment_F_Post_Controller } from './controllers/comment-controllers/comment-f-post.controller'
import { Comment_F_Video_Controller } from './controllers/comment-controllers/comment-f-video.controller'
import { CommentModule } from '../comment/comment.module'

@Module({
  controllers: [
    PostFilesController,
    GaleryFilesController,
    Comment_F_Video_Controller,
    Comment_F_Post_Controller,
    Comment_F_Photo_Controller,
  ],
  providers: [
    UserService,
    ConfigService,
    ForPostService,
    ForGaleryService,
    ImageService,
    VideoService,
    AudioService,
    ImagePostService,
    VideoPostService,
    AudioPostService,
   
  ],
  imports: [
    UserModule,
    ConfigModule,
    ForCommentModule,
    ForPostModule,
    ForGaleryModule,
    CommentModule,
    TypeOrmModule.forFeature([
      ImageEntity,
      AudioEntity,
      VideoEntity,
      UserEntity,
      Audio_F_Comment_F_Photo,
      Video_F_Comment_F_Photo,
      Image_F_Comment_F_Photo,
      Audio_F_Comment_F_Post,
      Image_F_Comment_F_Post,
      Video_F_Comment_F_Post,
      Audio_F_Comment_F_Video,
      Video_F_Comment_F_Video,
      Image_F_Comment_F_Video,
      AudioPostEntity,
      ImagePostEntity,
      VideoPostEntity,
    ]),
  ],
  exports: [],
})
export class RestFilesModule {}
