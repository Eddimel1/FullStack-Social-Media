import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { ReplyForPhotoEntity_U } from './entities/reply-f-photo.entity'
import { ReplyForPostEntity_U } from './entities/reply-f-post.entity'
import { ReplyForVideoEntity_U } from './entities/reply-f-video.entity'
import { Reply_F_Photo_Resolver_U } from './resolvers/for-photo-reply.resolver'
import { ReplyForPhotoService_DB_U } from './services/reply-f-photo.service'
import { ReplyForPostService_DB_U } from './services/reply-f-post.service'
import { ReplyForVideoService_DB_U } from './services/reply-f-video.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReplyForPhotoEntity_U,
      ReplyForVideoEntity_U,
      ReplyForPostEntity_U,
    ]),
  ],
  providers: [
    Reply_F_Photo_Resolver_U,
    Reply_F_Photo_Resolver_U,
    Reply_F_Photo_Resolver_U,
    ReplyForPhotoService_DB_U,
    ReplyForPostService_DB_U,
    ReplyForVideoService_DB_U,
  ],
  exports: [
    ReplyForPhotoService_DB_U,
    ReplyForPostService_DB_U,
    ReplyForVideoService_DB_U,
  ],
})
export class RepliesModule {}
