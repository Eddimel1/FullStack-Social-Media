import { UserEntity } from './../modules/user/entities/user.entity'

export type sanitized_user_props =
  | 'password'
  | 'r_token_version'
  | 'r_token'
  | 'role'
  | 'email'
export type SanitizedUserT = Omit<UserEntity, sanitized_user_props>

export type group_roles = 'participant' | 'moderator' | 'creator'
