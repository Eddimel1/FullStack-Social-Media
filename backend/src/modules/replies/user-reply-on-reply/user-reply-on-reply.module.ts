import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ReplyO_F_Photo_Resolver_U } from './resolvers/for-photo-reply.resolver'
import { ReplyO_F_Post_Resolver_U } from './resolvers/for-post-reply.resolver'
import { ReplyO_F_Video_Resolver_U } from './resolvers/for-video-reply.resolver'
import { ReplyOForPhotoService_DB_U } from './services/reply-f-photo.service'
import { ReplyOForPhotoEntity_U } from './entities/replyo-f-photo.entity'
import { ReplyOForPostEntity_U } from './entities/replyo-f-post.entity'
import { ReplyOForVideoEntity_U } from './entities/replyo-f-video.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReplyOForPhotoEntity_U,
      ReplyOForPostEntity_U,
      ReplyOForVideoEntity_U,
    ]),
  ],
  providers: [
    ReplyO_F_Photo_Resolver_U,
    ReplyO_F_Post_Resolver_U,
    ReplyO_F_Video_Resolver_U,
    ReplyOForPhotoService_DB_U,
    ReplyOForPhotoService_DB_U,
    ReplyOForPhotoService_DB_U,
  ],
  exports:[ ReplyOForPhotoService_DB_U,
    ReplyOForPhotoService_DB_U,
    ReplyOForPhotoService_DB_U,]
})
export class UserReplyOnReplyModule {}
