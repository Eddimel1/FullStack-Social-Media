import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'

import { FriendShip } from '../entities/friendship.entity'

import { FriendSidesService } from '../services/friends-sides-service'
import {
  ReadSide_I,
  UpdatePrivateSide_I,
  UpdateSharedSide_I,
  UpdateSide_I,
} from '../dto/input.dto'

import { UsersSharedSide } from '../../users-shared/entities/users-shared.entity'

import { UserPrivateSide } from '../../user-side/shared/entities/user-side-private.base-entity'
import { UserSide } from '../../user-side/shared/entities/user-side.base-entity'

@Resolver(() => FriendShip)
export class FriendSidesResolver {
  constructor(private readonly friendSidesService: FriendSidesService) {}

  @Query(() => UserSide)
  readMySide(@Args('readMySide') readMySide: ReadSide_I, @Context() context) {
    const my_id = context.req.user.id
    return this.friendSidesService.readMySide(
      my_id,
      readMySide.friendId,
      readMySide.sideId,
    )
  }

  @Query(() => UserSide)
  readMyFriendsSide(
    @Args('readMyFriendsSide') readMyFriendsSide: ReadSide_I,
    @Context() context,
  ) {
    const myId = context.req.user.id
    return this.friendSidesService.readMyFriendsSide(
      myId,
      readMyFriendsSide.friendId,
      readMyFriendsSide.sideId,
    )
  }

  @Query(() => UserPrivateSide)
  readMyPrivateSide(
    @Args('readMyPrivateSide') readMyPrivateSide: ReadSide_I,
    @Context() context,
  ) {
    const myId = context.req.user.id
    return this.friendSidesService.readMyPrivateSide(
      myId,
      readMyPrivateSide.friendId,
      readMyPrivateSide.sideId,
    )
  }

  @Query(() => UsersSharedSide)
  removeFriend(@Args('sideId') sideId: number) {
    return this.friendSidesService.readSharedSide(sideId)
  }

  @Mutation(() => UserSide)
  updateMySide(
    @Args('mySideUpdate') mySideUpdate: UpdateSide_I,
    @Context() context,
  ) {
    const myId = context.req.user.id
    const { friendId, sideId, update_input } = mySideUpdate
    return this.friendSidesService.updateMySide(
      myId,
      friendId,
      sideId,
      update_input,
    )
  }

  @Mutation(() => UserSide)
  updateSharedSide(
    @Args('sharedSideUpdate') sharedSideUpdate: UpdateSharedSide_I,
  ) {
    return this.friendSidesService.updateSharedSide(
      sharedSideUpdate.sideId,
      sharedSideUpdate.update_input,
    )
  }

  @Mutation(() => UserPrivateSide)
  updateMyPrivateSide(
    @Context() context,
    @Args('myPrivateSideUpdate') myPrivateSideUpdate: UpdatePrivateSide_I,
  ) {
    const myId = context.req.user.id
    const { friendId, sideId, update_input } = myPrivateSideUpdate
    return this.friendSidesService.updateMyPrivateSide(
      myId,
      friendId,
      sideId,
      update_input,
    )
  }
}
