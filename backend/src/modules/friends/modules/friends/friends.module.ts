import { UserSharedService } from './../users-shared/services/users-shared.service'
import { User1SideService } from './../user-side/user1-side/services/user1-side.service'
import { FriendShip } from './entities/friendship.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { FriendsService } from './services/friends.service'
import { FriendsResolver } from './resolvers/friends.resolver'
import { FriendRequestsModule } from '../friend-requests/friend-requests.module'
import { UserModule } from 'src/modules/user/user.module'
import { User1SidePrivateService } from '../user-side/user1-side-private/services/user1-side-private.service'
import { User2SideService } from '../user-side/user2-side/services/user2-side.service'
import { User2SidePrivateService } from '../user-side/user2-side-private/services/user2-side-private.service'
import { User1SidePrivate } from '../user-side/user1-side-private/entities/user1-side-private.entity'
import { User1Side } from '../user-side/user1-side/entities/user1-side.entity'
import { User2SidePrivate } from '../user-side/user2-side-private/entities/user2-side-private.entity'
import { User2Side } from '../user-side/user2-side/entities/user2-side.entity'
import { UsersSharedSide } from '../users-shared/entities/users-shared.entity'
import { FriendSidesService } from './services/friends-sides-service'
import { FriendSidesResolver } from './resolvers/friends-sides.resolver'
import { UserSideModule } from '../user-side/user-side.module'

@Module({
  imports: [
    FriendRequestsModule,
    TypeOrmModule.forFeature([
      FriendShip,
      User1Side,
      User2Side,
      User1SidePrivate,
      User2SidePrivate,
      UsersSharedSide,
    ]),
    UserModule,
    UserSideModule,
  ],
  providers: [
    FriendsResolver,
    FriendSidesResolver,
    FriendsService,
    User1SideService,
    User2SideService,
    User1SidePrivateService,
    User2SidePrivateService,
    UserSharedService,
    FriendSidesService
  ],
  exports: [FriendsService],
})
export class FriendsModule {}
