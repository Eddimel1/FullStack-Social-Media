import { Module } from '@nestjs/common'
import { SharedSideService } from './services/shared-side.service'
import { SharedSideResolver } from './resolvers/shared-side.resolver'

@Module({
  providers: [SharedSideResolver, SharedSideService],
})
export class SharedSideModule {}
