import { Module } from '@nestjs/common'
import { User2SideService } from './services/user2-side.service'
import { User2SideResolver } from '../shared/resolvers/user2-side.resolver'

@Module({
  providers: [User2SideResolver, User2SideService],
})
export class User2SideModule {}
