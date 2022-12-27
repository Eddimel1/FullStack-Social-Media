import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { ReplyForPhotoService_DB_G } from './services/reply-f-photo.service'
import { ReplyForPostService_DB_G } from './services/reply-f-post.service'
import { ReplyForVideoService_DB_G } from './services/reply-f-video.service'
import { ReplyForPhoto_G } from './entities/reply-f-photo.entity'
import { ReplyForPost_G } from './entities/reply-f-post.entity'
import { ReplyForVideo_G } from './entities/reply-f-video.entity'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { Reply_F_Photo_Resolver_G } from './resolvers/for-photo-reply.resolver'
import { Reply_F_Post_Resolver_G } from './resolvers/for-post-reply.resolver'
import { Reply_F_Video_Resolver_G } from './resolvers/for-video-reply.resolver'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReplyForPhoto_G,
      ReplyForPost_G,
      ReplyForVideo_G,
    ]),
  ],
  providers: [
    TypeOrmConfigService,
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
export class RepliesModule_G {}
