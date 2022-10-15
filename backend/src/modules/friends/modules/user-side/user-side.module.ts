import { Module } from '@nestjs/common'
import { User2SideService } from './user2-side/services/user2-side.service'

@Module({
  providers: [User2SideService],
})
export class UserSideModule {}
