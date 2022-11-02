import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ReplyForPhotoService_DB_G } from './services/reply-f-photo.service'

import { Reply_F_Photo_Resolver_G } from './resolvers/for-photo-reply.resolver'
import { Reply_F_Post_Resolver_G } from './resolvers/for-post-reply.resolver'
import { Reply_F_Video_Resolver_G } from './resolvers/for-video-reply.resolver'
import { ReplyForPostService_DB_G } from './services/reply-f-post.service'
import { ReplyForVideoService_DB_G } from './services/reply-f-video.service'
import { ReplyForPhotoEntity_G } from './entities/reply-f-photo.entity'
import { ReplyForPostEntity_G } from './entities/reply-f-post.entity'
import { ReplyForVideoEntity_G } from './entities/reply-f-video.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReplyForPhotoEntity_G,
      ReplyForPostEntity_G,
      ReplyForVideoEntity_G,
    ]),
  ],
  providers: [
    Reply_F_Photo_Resolver_G,
    Reply_F_Post_Resolver_G,
    Reply_F_Video_Resolver_G,
    ReplyForPhotoService_DB_G,
    ReplyForPostService_DB_G,
    ReplyForVideoService_DB_G,
  ],
  exports: [
    ReplyForPhotoService_DB_G,
    ReplyForPostService_DB_G,
    ReplyForVideoService_DB_G,
  ],
})
export class GroupRepliesModule {}
