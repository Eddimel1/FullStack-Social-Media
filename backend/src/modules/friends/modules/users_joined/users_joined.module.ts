import { Module } from '@nestjs/common'
import { UsersJoinedService } from './services/users_joined.service'
import { UsersJoinedResolver } from './resolvers/users_joined.resolver'

@Module({
  providers: [UsersJoinedResolver, UsersJoinedService],
})
export class UsersJoinedModule {}
