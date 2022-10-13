import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentForPhotoEntity } from './entities/comment-for-photo.entity'
import { CommentForPostEntity } from './entities/comment-for-post.entity'
import { CommentForVideoEntity } from './entities/comment-for-video.entity'
import { Comment_F_Photo_Resolver } from './resolvers/for-photo-comment.resolver'
import { Comment_F_Post_Resolver } from './resolvers/for-post-comment.resolver'
import { Comment_F_Video_Resolver } from './resolvers/for-video-comment-resolver'
import { CommentForPhotoService_DB } from './services/comment-for-photo-service'
import { CommentForPostService_DB } from './services/comment-for-post.service'
import { CommentForVideoService_DB } from './services/comment-for-video.service'

@Module({
  providers: [
    CommentForPhotoService_DB,
    CommentForPostService_DB,
    CommentForVideoService_DB,
    Comment_F_Video_Resolver,
    Comment_F_Photo_Resolver,
    Comment_F_Post_Resolver,
  ],
  imports: [
    TypeOrmModule.forFeature([
      CommentForPhotoEntity,
      CommentForVideoEntity,
      CommentForPostEntity,
    ]),
  ],
  exports: [
    CommentForPhotoService_DB,
    CommentForPostService_DB,
    CommentForVideoService_DB,
    Comment_F_Video_Resolver,
    Comment_F_Photo_Resolver,
    Comment_F_Post_Resolver,
  ],
})
export class CommentModule {}
