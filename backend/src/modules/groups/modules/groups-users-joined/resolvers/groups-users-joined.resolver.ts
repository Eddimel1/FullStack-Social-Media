import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { GroupsUsersJoinedService } from '../services/groups-users-joined.service'
import { GroupsUsersJoined } from '../entities/groups-users-joined.entity'
import { CreateGroupsUsersJoinedInput } from '../dto/create-groups-users-joined.input'
import { UpdateGroupsUsersJoinedInput } from '../dto/update-groups-users-joined.input'

@Resolver(() => GroupsUsersJoined)
export class GroupsUsersJoinedResolver {
  constructor(
    private readonly groupsUsersJoinedService: GroupsUsersJoinedService,
  ) {}

  @Mutation(() => GroupsUsersJoined)
  createGroupsUsersJoined(
    @Args('createGroupsUsersJoinedInput')
    createGroupsUsersJoinedInput: CreateGroupsUsersJoinedInput,
  ) {
    return this.groupsUsersJoinedService.create(createGroupsUsersJoinedInput)
  }

  @Query(() => [GroupsUsersJoined], { name: 'groupsUsersJoined' })
  findAll() {
    return this.groupsUsersJoinedService.findAll()
  }

  @Query(() => GroupsUsersJoined, { name: 'groupsUsersJoined' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupsUsersJoinedService.findOne(id)
  }

  @Mutation(() => GroupsUsersJoined)
  updateGroupsUsersJoined(
    @Args('updateGroupsUsersJoinedInput')
    updateGroupsUsersJoinedInput: UpdateGroupsUsersJoinedInput,
  ) {
    return this.groupsUsersJoinedService.update(
      updateGroupsUsersJoinedInput.id,
      updateGroupsUsersJoinedInput,
    )
  }

  @Mutation(() => GroupsUsersJoined)
  removeGroupsUsersJoined(@Args('id', { type: () => Int }) id: number) {
    return this.groupsUsersJoinedService.remove(id)
  }
}
