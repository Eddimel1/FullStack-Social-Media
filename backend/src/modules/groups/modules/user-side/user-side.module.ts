import { Module } from '@nestjs/common'
import { UserSideService } from './services/user-side.service'
import { UserSideResolver } from './resolvers/user-side.resolver'

@Module({
  providers: [UserSideResolver, UserSideService],
})
export class UserSideModule {}
