import { UsersSharedSide } from './../users-shared/entities/users-shared.entity'
import { User1Side } from './user1-side/entities/user1-side.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User2SideService } from './user2-side/services/user2-side.service'
import { User1SidePrivate } from './user1-side-private/entities/user1-side-private.entity'
import { User2SidePrivate } from './user2-side-private/entities/user2-side-private.entity'
import { User2Side } from './user2-side/entities/user2-side.entity'
import { UserSharedService } from '../users-shared/services/users-shared.service'
import { User1SideService } from './user1-side/services/user1-side.service'
import { User2SidePrivateService } from './user2-side-private/services/user2-side-private.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User1Side,
      User2Side,
      User1SidePrivate,
      User2SidePrivate,
      UsersSharedSide,
    ]),
  ],
  providers: [
    User2SideService,
    User1SideService,
    User2SidePrivateService,
    User1SideService,
    UserSharedService,
  ],
  exports: [
    User2SideService,
    User1SideService,
    User2SidePrivateService,
    User1SideService,
    UserSharedService,
  ],
})
export class UserSideModule {}
