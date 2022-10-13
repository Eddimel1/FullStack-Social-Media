export enum Roles {
  User = 'user',
  Admin = 'admin',
}
import { SetMetadata } from '@nestjs/common'

export const ROLES_KEY = 'roles'
export const RolesDec = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles)
