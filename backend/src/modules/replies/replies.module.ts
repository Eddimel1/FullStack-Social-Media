import { Module } from '@nestjs/common'
import { RepliesService } from './services/replies.service'
import { RepliesResolver } from './resolvers/replies.resolver'

@Module({
  providers: [RepliesResolver, RepliesService],
})
export class RepliesModule {}
