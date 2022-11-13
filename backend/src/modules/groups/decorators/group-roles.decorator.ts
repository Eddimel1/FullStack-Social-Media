import { SetMetadata } from '@nestjs/common'

export enum Group_Roles {
  PARTICIPANT = 'participant',
  CREATOR = 'creator',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
  OWNER = 'owner',
}
export const Group_Roles_All = [
  Group_Roles.OWNER,
  Group_Roles.ADMIN,
  Group_Roles.MODERATOR,
  Group_Roles.CREATOR,
  Group_Roles.PARTICIPANT,
]
export const Group_Roles_Sensitive = [
  Group_Roles.OWNER,
  Group_Roles.ADMIN,
  Group_Roles.MODERATOR,
]


export const GROUP_ROLES_KEY = 'group_roles'
export const RolesGroupDec = (roles: Group_Roles[]) =>
  SetMetadata(GROUP_ROLES_KEY, roles)
