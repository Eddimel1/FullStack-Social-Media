import { Module } from '@nestjs/common';
import { FriendRequestsService } from './friend-requests.service';
import { FriendRequestsResolver } from './friend-requests.resolver';

@Module({
  providers: [FriendRequestsResolver, FriendRequestsService]
})
export class FriendRequestsModule {}
