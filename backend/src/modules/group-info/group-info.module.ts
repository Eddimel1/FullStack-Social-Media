import { Module } from '@nestjs/common'
import { GroupInfoService } from './services/group-info.service'
import { GroupInfoResolver } from './resolvers/group-info.resolver'

@Module({
  providers: [GroupInfoResolver, GroupInfoService],
})
export class GroupInfoModule {}
