import { Module } from '@nestjs/common'
import { GroupSideService } from './services/group-side.service'
import { GroupSideResolver } from './resolvers/group-side.resolver'

@Module({
  providers: [GroupSideResolver, GroupSideService],
})
export class GroupSideModule {}
