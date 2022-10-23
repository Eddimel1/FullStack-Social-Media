import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { GroupsService } from '../modules/groups/services/groups.service'

@Injectable()
export class Group_Ownership_Guard implements CanActivate {
  constructor(private readonly groupService: GroupsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
    const user_id = ctx.getContext().req.user.id
    const group_id = ctx.getArgs().groupId
    const group = await this.groupService.findOneGroup(group_id)
    if (group.ownerId === user_id) {
      return true
    } else return false
  }
}
