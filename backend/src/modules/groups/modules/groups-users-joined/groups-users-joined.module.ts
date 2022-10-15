import { Module } from '@nestjs/common'

import { GroupsUsersJoinedResolver } from './resolvers/groups-users-joined.resolver'
import { Groups_A_Users_Service } from './services/groups-users-joined.service'

@Module({
  providers: [GroupsUsersJoinedResolver, Groups_A_Users_Service],
})
export class GroupsUsersJoinedModule {}
