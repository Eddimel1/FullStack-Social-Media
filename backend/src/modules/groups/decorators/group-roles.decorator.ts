export enum Group_Roles {
  PARTICIPANT = 'participant',
  CREATOR = 'creator',
  MODERATOR = 'moderator',
}
import { SetMetadata } from '@nestjs/common'

export const GROUP_ROLES_KEY = 'group_roles'
export const RolesGroupDec = (...roles: Group_Roles[]) => SetMetadata(GROUP_ROLES_KEY, roles)
