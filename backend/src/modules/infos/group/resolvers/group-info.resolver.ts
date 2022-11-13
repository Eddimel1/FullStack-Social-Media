import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { GroupInfoService } from '../services/group-info.service'
import { GroupInfo } from '../entities/group-info.entity'
import { CreateGroupInfo_I, UpdateGroupInfo_I } from '../dto/input.dto'

import { UseGuards } from '@nestjs/common'
import { Group_Roles_Guard } from 'src/modules/groups/guards/group-roles-guard'
import {
  RolesGroupDec,
  Group_Roles,
} from 'src/modules/groups/decorators/group-roles.decorator'
import { Delete_Message_WO_Owner } from 'src/global/globalDtos/output.dto'

@UseGuards(Group_Roles_Guard)
@Resolver(() => GroupInfo)
export class GroupInfoResolver {
  constructor(private readonly groupInfoService: GroupInfoService) {}

  @RolesGroupDec([Group_Roles.OWNER])
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

  @RolesGroupDec([Group_Roles.OWNER, Group_Roles.ADMIN])
  @Mutation(() => GroupInfo)
  updateGroupInfo(
    @Args('updateGroupInfoInput') updateGroupInfoInput: UpdateGroupInfo_I,
  ) {
    const { groupId, ...update } = updateGroupInfoInput
    return this.groupInfoService.updateOne(groupId, update, 'group-info')
  }

  @RolesGroupDec([Group_Roles.OWNER, Group_Roles.ADMIN])
  @Mutation(() => Delete_Message_WO_Owner)
  removeGroupInfo(@Args('id') id: number) {
    return this.groupInfoService.removeOne(id, 'group-info')
  }
}
