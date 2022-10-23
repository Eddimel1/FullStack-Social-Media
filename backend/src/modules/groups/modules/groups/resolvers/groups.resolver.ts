import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import {
  Group_Roles,
  RolesGroupDec,
} from 'src/modules/groups/decorators/group-roles.decorator'
import { Group_Roles_Guard } from 'src/modules/groups/guards/group-roles-guard'
import { CreateGroupInput } from '../dto/input'
import { GroupEntity } from '../entities/group.entity'
import { GroupsService } from '../services/groups.service'

@Resolver(() => GroupEntity)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation(() => GroupEntity)
  createGroup(
    @Context() context,
    @Args('createGroupInput') createGroupInput: CreateGroupInput,
  ) {
    const userId = context.req.user.id
    return this.groupsService.create(createGroupInput, userId)
  }
  @RolesGroupDec(Group_Roles.CREATOR)
  @UseGuards(Group_Roles_Guard)
  @Query(() => [GroupEntity])
  findAllOwnedGroups(@Context() context) {
    const userId = context.req.user.id
    return this.groupsService.findAllOwnedGroups(userId)
  }

  @Query(() => GroupEntity)
  findOneOwnedGroup(@Args('groupId') groupId: number, @Context() context) {
    const userId = context.req.user.id
    return this.groupsService.findOneOwnedGroup(userId, groupId)
  }

  @Mutation(() => GroupEntity)
  updateOwnedGroup() {
    return this.groupsService.updateOwnedGroup()
  }

  @Mutation(() => GroupEntity)
  removeGroup(@Context() context, @Args('groupId') groupId: number) {
    const userId = context.req.user.id
    return this.groupsService.removeOwnedGroup(userId, groupId)
  }
}
