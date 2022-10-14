import { Module } from '@nestjs/common'
import { GroupsService } from './services/groups.service'
import { GroupsResolver } from './resolvers/groups.resolver'

@Module({
  providers: [GroupsResolver, GroupsService],
})
export class GroupsModule {}
