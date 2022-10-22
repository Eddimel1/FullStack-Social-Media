import { User1SideService } from './../../user-side/user1-side/services/user1-side.service'

import { Injectable } from '@nestjs/common'

import { User1SidePrivateService } from '../../user-side/user1-side-private/services/user1-side-private.service'
import { User2SidePrivateService } from '../../user-side/user2-side-private/services/user2-side-private.service'
import { User2SideService } from '../../user-side/user2-side/services/user2-side.service'
import { UserSharedService } from '../../users-shared/services/users-shared.service'
import { FriendsService } from './friends.service'
import {
  UpdateUserSide,
  UpdateUsersPrivateSide,
} from '../../user-side/shared/dto/input.dto'

//handleErrors
@Injectable()
export class FriendSidesService {
  constructor(
    private readonly friendsService: FriendsService,
    private readonly user1SideService: User1SideService,
    private readonly user2SideService: User2SideService,
    private readonly user1SidePrivateService: User1SidePrivateService,
    private readonly user2SidePrivateService: User2SidePrivateService,
    private readonly usersSharedService: UserSharedService,
  ) {}
  //handle errors
  async readMySide(myId: number, friendId, sideId: number) {
    const requester_side = await this.friendsService.getOneFriendShip(
      myId,
      friendId,
    )
    if (requester_side.user1_id === myId) {
      return this.user1SideService.findOne(sideId)
    } else if (requester_side.user2_id === myId) {
      return this.user2SideService.findOne(sideId)
    }
  }

  async readMyFriendsSide(myId: number, friendId, sideId: number) {
    const requester_side = await this.friendsService.getOneFriendShip(
      myId,
      friendId,
    )
    if (requester_side.user1_id === myId) {
      return this.user2SideService.findOne(sideId)
    } else if (requester_side.user2_id === myId) {
      return this.user1SideService.findOne(sideId)
    }
  }

  async readMyPrivateSide(myId: number, friendId, sideId: number) {
    const requester_side = await this.friendsService.getOneFriendShip(
      myId,
      friendId,
    )
    if (requester_side.user1_id === myId) {
      return this.user1SidePrivateService.findOne(sideId)
    } else if (requester_side.user2_id === myId) {
      return this.user2SidePrivateService.findOne(sideId)
    }
  }

  async readSharedSide(sideId: number) {
    const shared_side = await this.usersSharedService.findOne(sideId)
    return shared_side
  }

  async updateMySide(
    myId: number,
    friendId: number,
    sideId: number,
    update_input: UpdateUserSide,
  ) {
    const requester_side = await this.friendsService.getOneFriendShip(
      myId,
      friendId,
    )

    if (requester_side.user1_id === myId) {
      return this.user1SideService.update(sideId, update_input)
    } else if (requester_side.user2_id === myId) {
      return this.user2SideService.update(sideId, update_input)
    }
  }

  async updateSharedSide(sideId: number, update_input: UpdateUserSide) {
    const shared_side = await this.usersSharedService.update(
      sideId,
      update_input,
    )
    return shared_side
  }

  async updateMyPrivateSide(
    myId: number,
    friendId: number,
    sideId: number,
    update_input: UpdateUsersPrivateSide,
  ) {
    const requester_side = await this.friendsService.getOneFriendShip(
      myId,
      friendId,
    )
    if (requester_side.user1_id === myId) {
      return this.user1SidePrivateService.update(sideId, update_input)
    } else if (requester_side.user2_id === myId) {
      return this.user2SidePrivateService.update(sideId, update_input)
    }
  }
}
