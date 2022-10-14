import { Module } from '@nestjs/common'
import { UsersSharedService } from './services/users-shared.service'
import { UsersSharedResolver } from './resolvers/users-shared.resolver'

@Module({
  providers: [UsersSharedResolver, UsersSharedService],
})
export class UsersSharedModule {}
