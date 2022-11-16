import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { USER_RELATIONS_W_GROUP } from 'src/global/constants/db.constants'
import { propSeeker } from 'src/global/globalUtils/Seekers/seekers'
import {
  Group_Roles,
  GROUP_ROLES_KEY,
} from '../decorators/group-roles.decorator'
import { GroupUserRelationshipService } from '../modules/group-user-relationship/services/group-user-relationship.service'

@Injectable()
export class Group_Roles_Guard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly groupUserRelationshipService: GroupUserRelationshipService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)
   
    const requiredRoles = this.reflector.getAllAndOverride<Group_Roles[]>(
      GROUP_ROLES_KEY,
      [context.getHandler(), context.getClass()],
    )

    if (!requiredRoles) {
      return true
    }
   
    const user_id = ctx.getContext().req.user.id
    const args = ctx.getArgs()
    const groupId = propSeeker(args, 'groupId')
    const relationship =
      await this.groupUserRelationshipService.findOneRelationshipWithGroup(
        user_id,
        groupId,
        USER_RELATIONS_W_GROUP.GROUP_SIDE,
      )
    const group_role = relationship.group_side.role
    console.log('GROUP_ROLE : ', group_role, 'ROLES : ', requiredRoles)
    if (requiredRoles.some((role) => role === group_role)) {
      return true
    } else return false
  }
}
