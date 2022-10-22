import { SanitizedUser } from './../../../../user/entities/user.entity'
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { FriendsService } from '../services/friends.service'
import { FriendShip } from '../entities/friendship.entity'
import { FindAndCountFriends_O, IsSuccess_O } from '../dto/output.dto'

@Resolver(() => FriendShip)
export class FriendsResolver {
  constructor(private readonly friendsService: FriendsService) {}

  @Mutation(() => SanitizedUser)
  createFriendShip(
    @Args('requester_id') requester_id: number,
    @Context() context,
  ) {
    const accepter_id = context.req.user.id
    return this.friendsService.createFriendShip(accepter_id, requester_id)
  }

  @Query(() => FindAndCountFriends_O)
  findAllFriends(@Context() context) {
    const userId = context.req.user.id
    return this.friendsService.findAllFriends(userId)
  }

  @Query(() => SanitizedUser)
  findOneFriend(@Args('friendId') friendId: number, @Context() context) {
    const userId = context.req.user.id
    return this.friendsService.findOneFriend(userId, friendId)
  }

  @Mutation(() => IsSuccess_O)
  removeFriend(@Args('friendId') friendId: number, @Context() context) {
    const userId = context.req.user.id
    return this.friendsService.removeFriend(userId, friendId)
  }
}
