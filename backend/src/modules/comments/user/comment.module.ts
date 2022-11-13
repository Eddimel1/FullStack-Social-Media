import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { CommentForPhotoEntity_U } from './entities/comment-for-photo.entity'
import { CommentForPostEntity_U } from './entities/comment-for-post.entity'
import { CommentForVideoEntity_U } from './entities/comment-for-video.entity'
import { Comment_F_Photo_Resolver_U } from './resolvers/for-photo-comment.resolver'
import { Comment_F_Post_Resolver_U } from './resolvers/for-post-comment.resolver'
import { Comment_F_Video_Resolver_U } from './resolvers/for-video-comment-resolver'
import { CommentForPhotoService_DB_U } from './services/comment-for-photo-service'
import { CommentForPostService_DB_U } from './services/comment-for-post.service'
import { CommentForVideoService_DB_U } from './services/comment-for-video.service'

@Module({
  providers: [
    CommentForPhotoService_DB_U,
    CommentForPostService_DB_U,
    CommentForVideoService_DB_U,
    Comment_F_Video_Resolver_U,
    Comment_F_Photo_Resolver_U,
    Comment_F_Post_Resolver_U,
  ],
  imports: [
    TypeOrmModule.forFeature([
      CommentForPhotoEntity_U,
      CommentForVideoEntity_U,
      CommentForPostEntity_U,
    ]),
  ],
  exports: [
    CommentForPhotoService_DB_U,
    CommentForPostService_DB_U,
    CommentForVideoService_DB_U,
  ],
})
export class CommentModule {}
