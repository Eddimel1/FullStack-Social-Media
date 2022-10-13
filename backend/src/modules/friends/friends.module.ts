import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsResolver } from './friends.resolver';

@Module({
  providers: [FriendsResolver, FriendsService]
})
export class FriendsModule {}
