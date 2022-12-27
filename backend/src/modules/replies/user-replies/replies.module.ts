import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfigService } from 'src/typeOrm/config/typeorm.service'
import { ReplyForPhoto_U } from './entities/reply-f-photo.entity'
import { ReplyForPost_U } from './entities/reply-f-post.entity'
import { ReplyForVideo_U } from './entities/reply-f-video.entity'
import { Reply_F_Photo_Resolver_U } from './resolvers/for-photo-reply.resolver'
import { Reply_F_Post_Resolver_U } from './resolvers/for-post-reply.resolver'
import { Reply_F_Video_Resolver_U } from './resolvers/for-video-reply.resolver'
import { ReplyForPhotoService_DB_U } from './services/reply-f-photo.service'
import { ReplyForPostService_DB_U } from './services/reply-f-post.service'
import { ReplyForVideoService_DB_U } from './services/reply-f-video.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReplyForPhoto_U,
      ReplyForPost_U,
      ReplyForVideo_U,
    ]),
  ],
  providers: [
    TypeOrmConfigService,
    Reply_F_Photo_Resolver_U,
    Reply_F_Post_Resolver_U,
    Reply_F_Video_Resolver_U,
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
export class RepliesModule_U {}
