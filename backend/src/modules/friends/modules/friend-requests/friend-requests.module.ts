import { Module } from '@nestjs/common'
import { FriendRequestsService } from './services/friend-requests.service'
import { FriendRequestsResolver } from './resolvers/friend-requests.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FriendRequest } from './entities/friend-request.entity'

@Module({
  imports: [TypeOrmModule.forFeature([FriendRequest])],
  providers: [FriendRequestsResolver, FriendRequestsService],
  exports: [FriendRequestsService],
})
export class FriendRequestsModule {}
