import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { GroupInfoService } from '../services/group-info.service'
import { GroupInfo } from '../entities/group-info.entity'
import { CreateGroupInfoInput, UpdateGroupInfoInput } from '../dto/input.dto'


@Resolver(() => GroupInfo)
export class GroupInfoResolver {
  constructor(private readonly groupInfoService: GroupInfoService) {}

  @Mutation(() => GroupInfo)
  createGroupInfo(
    @Args('createGroupInfoInput') createGroupInfoInput: CreateGroupInfoInput,
  ) {
    return this.groupInfoService.create(createGroupInfoInput)
  }

  @Query(() => [GroupInfo], { name: 'groupInfo' })
  findAll() {
    return this.groupInfoService.findAll()
  }

  @Query(() => GroupInfo, { name: 'groupInfo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupInfoService.findOne(id)
  }

  @Mutation(() => GroupInfo)
  updateGroupInfo(
    @Args('updateGroupInfoInput') updateGroupInfoInput: UpdateGroupInfoInput,
  ) {
    return this.groupInfoService.update(
      updateGroupInfoInput.id,
      updateGroupInfoInput,
    )
  }

  @Mutation(() => GroupInfo)
  removeGroupInfo(@Args('id', { type: () => Int }) id: number) {
    return this.groupInfoService.remove(id)
  }
}
