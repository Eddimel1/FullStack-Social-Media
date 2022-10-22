import { SENSITIVE_USER_PROPERTIES } from './../../constants/user.constants'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { SanitizedUserT } from 'src/GlobalTypes/user.types'

export const sanitizeUser = (user: UserEntity | UserEntity[]) => {
  if (user instanceof Array) {
    const users_copy = [...user]
    users_copy.map((user) => {
      const user_copy = { ...user }
      const sanitized_user = SENSITIVE_USER_PROPERTIES.forEach(
        (prop) => delete user_copy[prop]
      )
      return sanitized_user
    })
  }
  if (user instanceof Object) {
    const user_copy = { ...user }
    SENSITIVE_USER_PROPERTIES.forEach((prop) => delete user_copy[prop])
    return user_copy as SanitizedUserT
  }
}
