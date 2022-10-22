import { User1SideService } from './../../user-side/user1-side/services/user1-side.service'
import { filterAndTransformFriend } from './../utils/utils'
import { FriendShip } from '../entities/friendship.entity'
import { Injectable } from '@nestjs/common'

import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { FriendRequestsService } from '../../friend-requests/services/friend-requests.service'
import { UserService } from 'src/modules/user/services/user.service'
import { DEFAULT_PORTION } from 'src/constants/db.constants'

import { IsSuccess_O } from '../dto/output.dto'
import { sanitizeUser } from 'src/SharedUtils.ts/sanitizers/user.sanitizer'
import { filterAndTransformFriends } from '../utils/utils'
import { User1SidePrivateService } from '../../user-side/user1-side-private/services/user1-side-private.service'
import { User2SidePrivateService } from '../../user-side/user2-side-private/services/user2-side-private.service'
import { User2SideService } from '../../user-side/user2-side/services/user2-side.service'
import { UserSharedService } from '../../users-shared/services/users-shared.service'

//handleErrors
@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(FriendShip)
    private readonly friendShipRepository: Repository<FriendShip>,
    private readonly friendRequestsService: FriendRequestsService,
    private readonly userService: UserService,
    private readonly user1SideService: User1SideService,
    private readonly user2SideService: User2SideService,
    private readonly user1SidePrivateService: User1SidePrivateService,
    private readonly user2SidePrivateService: User2SidePrivateService,
    private readonly usersSharedService: UserSharedService,
  ) {}
  async createFriendShip(accepter_id: number, requester_id: number) {
    const created_entities = await Promise.all([
      this.user1SideService.create(),
      this.user2SideService.create(),
      this.user1SidePrivateService.create(),
      this.user2SidePrivateService.create(),
      this.usersSharedService.create(),
    ])
    const new_friendship = new FriendShip()
    new_friendship.user1_id = accepter_id
    new_friendship.user2_id = requester_id
    new_friendship.user1_side = created_entities[0]
    new_friendship.user2_side = created_entities[1]
    new_friendship.user1_side_private = created_entities[2]
    new_friendship.user2_side_private = created_entities[3]
    new_friendship.users_shared_side = created_entities[4]
    const created_friendship = await this.friendShipRepository.save(
      new_friendship,
    )

    if (created_friendship) {
      const isDestroyed = await this.friendRequestsService.destroyRequest(
        accepter_id,
        requester_id,
      )
      if (isDestroyed) {
        const new_friend = await this.userService.getOneUser(requester_id)

        return sanitizeUser(new_friend)
      }
    }
  }
  async getOneFriendShip(userId: number, friendId: number) {
    console.log('in friendship')
    const friendship = await this.friendShipRepository
      .createQueryBuilder('friendship')
      .where('user1_id =:userId AND user2_id =:friendId', { userId, friendId })
      .orWhere('user2_id =:userId AND user1_id =:friendId', {
        userId,
        friendId,
      })
      .getOne()
      
    return friendship
  }

  async findAllFriends(userId: number) {
    const friends = await this.friendShipRepository
      .createQueryBuilder('friendship')
      .where('user1_id =:userId OR user2_id =:userId', { userId })
      .limit(DEFAULT_PORTION)
      .innerJoinAndSelect('friendship.user1', 'user1')
      .innerJoinAndSelect('friendship.user2', 'user2')
      .getManyAndCount()
    console.log(filterAndTransformFriends(friends, userId))
    return filterAndTransformFriends(friends, userId)
  }

  async findOneFriend(userId: number, friendId: number) {
    const friendship = await this.friendShipRepository
      .createQueryBuilder('friendship')
      .innerJoinAndSelect('friendship.user1', 'user1')
      .innerJoinAndSelect('friendship.user2', 'user2')
      .where('user1_id =:userId AND user2_id =:friendId', { userId, friendId })
      .orWhere('user2_id =:userId AND user1_id =:friendId', {
        userId,
        friendId,
      })
      .getOne()
    const friend = filterAndTransformFriend(friendship, userId)
    return friend
  }

  async removeFriend(userId: number, friendId: number) {
    const isSuccess = await this.friendShipRepository
      .createQueryBuilder('friendship')
      .delete()
      .where('user1_id =:userId AND user2_id =:friendId', { userId, friendId })
      .orWhere('user2_id =:userId AND user1_id =:friendId', {
        userId,
        friendId,
      })
      .execute()
    const isSuccess_O = {
      friendId,
      isSuccess: isSuccess.affected > 0 ? true : false,
    }
    return isSuccess_O as IsSuccess_O
  }
}
