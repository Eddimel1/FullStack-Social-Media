import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
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

  @Query(() => [GroupEntity])
  findAllOwnedGroups(@Context() context) {
    const userId = context.req.user.id
    return this.groupsService.findAllOwnedGroups(userId)
  }

  @Query(() => GroupEntity)
  findOne(@Args('groupId') groupId: number, @Context() context) {
    const userId = context.req.user.id
    return this.groupsService.findOneOwnedGroup(groupId, userId)
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
