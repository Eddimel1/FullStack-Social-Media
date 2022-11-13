import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { CommentForPhotoEntity_G } from './entities/comment-for-photo_g.entity'
import { CommentForPostEntity_G } from './entities/comment-for-post_g.entity'
import { CommentForVideoEntity_G } from './entities/comment-for-video_g.entity'
import { CommentForPhotoService_DB_G } from './services/comment-for-photo-service'
import { CommentForVideoService_DB_G } from './services/comment-for-video.service'
import { Comment_F_Photo_Resolver_G } from './resolvers/for-photo-comment.resolver'
import { Comment_F_Post_Resolver_G } from './resolvers/for-post-comment.resolver'
import { Comment_F_Video_Resolver_G } from './resolvers/for-video-comment-resolver'
import { CommentForPostService_DB_G } from './services/comment-for-post.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CommentForPhotoEntity_G,
      CommentForPostEntity_G,
      CommentForVideoEntity_G,
    ]),
  ],
  providers: [
    Comment_F_Photo_Resolver_G,
    Comment_F_Post_Resolver_G,
    Comment_F_Video_Resolver_G,
    CommentForPhotoService_DB_G,
    CommentForPostService_DB_G,
    CommentForVideoService_DB_G,
  ],
  exports: [
    CommentForPhotoService_DB_G,
    CommentForPostService_DB_G,
    CommentForVideoService_DB_G,
  ],
})
export class CommentsForGroupModule {}
