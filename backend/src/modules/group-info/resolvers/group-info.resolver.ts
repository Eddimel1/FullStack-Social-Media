import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { GroupInfoService } from '../services/group-info.service'
import { GroupInfo } from '../entities/group-info.entity'
import { CreateGroupInfo_I, UpdateGroupInfo_I } from '../dto/input.dto'
import { Delete_Message_WO_Owner } from 'src/sharedDtos/output.dto'

@Resolver(() => GroupInfo)
export class GroupInfoResolver {
  constructor(private readonly groupInfoService: GroupInfoService) {}

  @Mutation(() => GroupInfo)
  createGroupInfo(
    @Args('createGroupInfoInput') createGroupInfoInput: CreateGroupInfo_I,
  ) {
    return this.groupInfoService.create(createGroupInfoInput)
  }

  @Query(() => GroupInfo)
  findOneGroupInfo(@Args('id') id: number) {
    return this.groupInfoService.findOne(id, 'group-info')
  }

  @Mutation(() => GroupInfo)
  updateGroupInfo(
    @Args('updateGroupInfoInput') updateGroupInfoInput: UpdateGroupInfo_I,
  ) {
    const { groupId, ...update } = updateGroupInfoInput
    return this.groupInfoService.updateOne(groupId, update, 'group-info')
  }

  @Mutation(() => Delete_Message_WO_Owner)
  removeGroupInfo(@Args('id') id: number) {
    return this.groupInfoService.removeOne(id, 'group-info')
  }
}
