import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ReplyO_F_Photo_Resolver_G } from './resolvers/for-photo-reply.resolver'
import { ReplyO_F_Post_Resolver_G } from './resolvers/for-post-reply.resolver'
import { ReplyO_F_Video_Resolver_G } from './resolvers/for-video-reply.resolver'
import { ReplyOForPhotoService_DB_G } from './services/reply-f-photo.service'
import { ReplyOForPostService_DB_G } from './services/reply-f-post.service'
import { ReplyOForVideoService_DB_G } from './services/reply-f-video.service'
import { ReplyOForPhotoEntity_G } from './entities/replyo-f-photo.entity'
import { ReplyOForPostEntity_G } from './entities/replyo-f-post.entity'
import { ReplyOForVideoEntity_G } from './entities/replyo-f-video.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReplyOForPhotoEntity_G,
      ReplyOForPostEntity_G,
      ReplyOForVideoEntity_G,
    ]),
  ],
  providers: [
    ReplyO_F_Post_Resolver_G,
    ReplyO_F_Video_Resolver_G,
    ReplyO_F_Photo_Resolver_G,
    ReplyOForPhotoService_DB_G,
    ReplyOForPostService_DB_G,
    ReplyOForVideoService_DB_G,
  ],
  exports: [
    ReplyOForPhotoService_DB_G,
    ReplyOForPostService_DB_G,
    ReplyOForVideoService_DB_G,
  ],
})
export class GroupReplyOnReplyModule {}
