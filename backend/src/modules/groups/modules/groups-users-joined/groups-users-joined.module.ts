import { Module } from '@nestjs/common'
import { GroupsUsersJoinedService } from './services/groups-users-joined.service'
import { GroupsUsersJoinedResolver } from './resolvers/groups-users-joined.resolver'

@Module({
  providers: [GroupsUsersJoinedResolver, GroupsUsersJoinedService],
})
export class GroupsUsersJoinedModule {}
