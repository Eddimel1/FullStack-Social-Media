import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { UpdateGroupUserSharedSide_O } from '../../shared-side/dto/output.dto'
import { UpdatePrivateGroupSide_O } from '../../sides/group-side-private/dto/output.dto'
import { UpdateGroupSide_O } from '../../sides/group-side/dto/output.dto'
import { UpdatePrivateUserSide_O } from '../../sides/user-side-private/dto/output.dto'
import { UpdateUserSide_O } from '../../sides/user-side/dto/output.dto'
import {
  CreateRelationShip_G,
  FindRelationShip_G,
  UpdateRelationShip_G,
  UpdateRelationShip_SH,
  UpdateRelationShip_U,
} from '../dto/input.dto'
import { isSuccess_G } from '../dto/output.dto'

import { Group_User_Relation } from '../entities/group-user-relationship.entity'
import { GroupUserRelationshipService } from '../services/group-user-relationship.service'

@Resolver(() => Group_User_Relation)
export class GroupUserRelationshipResolver {
  constructor(
    private readonly groupUserRelationshipService: GroupUserRelationshipService,
  ) {}

  @Mutation(() => Group_User_Relation)
  createGroupUserRelationship_U(
    @Args('groupId') groupId: number,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.groupUserRelationshipService.createGroupUserRelationship_U(
      userId,
      groupId,
    )
  }
  //validate ownership of a group via guard
  @Mutation(() => Group_User_Relation)
  createGroupUserRelationship_G(
    @Args('CreateRelationShip_G') createRelationShip_G: CreateRelationShip_G,
  ) {
    return this.groupUserRelationshipService.createGroupUserRelationship_U(
      createRelationShip_G.userId,
      createRelationShip_G.groupId,
    )
  }

  @Query(() => [Group_User_Relation])
  findAllRelationshipsWithUsers(@Args('groupId') groupId: number) {
    return this.groupUserRelationshipService.findAllRelationshipsWithUsers(
      groupId,
    )
  }

  @Query(() => [Group_User_Relation])
  findAllRelationshipsWithGroups(@Context() context) {
    const userId = context.req.user.id
    return this.groupUserRelationshipService.findAllRelationshipsWithGroups(
      userId,
    )
  }

  @Query(() => Group_User_Relation)
  findOneRelationshipWithUser(
    @Args('FindRelationShip_G') findRelationShip_G: FindRelationShip_G,
  ) {
    return this.groupUserRelationshipService.findOneRelationshipWithUser(
      findRelationShip_G.userId,
      findRelationShip_G.groupId,
    )
  }

  @Query(() => Group_User_Relation)
  findOneRelationshipWithGroup(
    @Args('groupId') groupId: number,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.groupUserRelationshipService.findOneRelationshipWithUser(
      userId,
      groupId,
    )
  }

  @Mutation(() => isSuccess_G)
  destroyRelationship_U(@Args('groupId') groupId: number, @Context() context) {
    const userId = context.req.user.id
    return this.groupUserRelationshipService.destroyRelationship_U(
      userId,
      groupId,
    )
  }

  @Mutation(() => isSuccess_G)
  destroyRelationship_G(
    @Args('FindRelationShip_G') findRelationShip_G: FindRelationShip_G,
  ) {
    return this.groupUserRelationshipService.destroyRelationship_U(
      findRelationShip_G.userId,
      findRelationShip_G.groupId,
    )
  }

  @Mutation(() => UpdateUserSide_O)
  updateUserSide(
    @Args('UpdateRelationShip_U') updateRelationShip_U: UpdateRelationShip_U,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.groupUserRelationshipService.updateUserSide(
      userId,
      updateRelationShip_U.groupId,
      updateRelationShip_U.update,
    )
  }

  @Mutation(() => UpdateGroupSide_O)
  updateGroupSide(
    @Args('UpdateRelationShip_G') updateRelationShip_G: UpdateRelationShip_G,
  ) {
    return this.groupUserRelationshipService.updateGroupSide(
      updateRelationShip_G.userId,
      updateRelationShip_G.groupId,
      updateRelationShip_G.update,
    )
  }

  @Mutation(() => UpdatePrivateUserSide_O)
  updateUserPrivateSide(
    @Args('updateUserPrivateSide') updateRelationShip_U: UpdateRelationShip_U,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.groupUserRelationshipService.updateUserSide(
      userId,
      updateRelationShip_U.groupId,
      updateRelationShip_U.update,
    )
  }

  @Mutation(() => UpdatePrivateGroupSide_O)
  updateGroupPrivateSide(
    @Args('updateGroupPrivateSide') updateRelationShip_G: UpdateRelationShip_G,
  ) {
    return this.groupUserRelationshipService.updateGroupPrivateSide(
      updateRelationShip_G.userId,
      updateRelationShip_G.groupId,
      updateRelationShip_G.update,
    )
  }

  @Mutation(() => UpdateGroupUserSharedSide_O)
  updateSharedSide(
    @Args('updateSharedSide') updateRelationShip_SH: UpdateRelationShip_SH,
  ) {
    return this.groupUserRelationshipService.updateSharedSide(
      updateRelationShip_SH.userId,
      updateRelationShip_SH.groupId,
      updateRelationShip_SH.update,
    )
  }
}
