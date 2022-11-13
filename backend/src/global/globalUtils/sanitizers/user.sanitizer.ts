import { UserEntity } from 'src/modules/users/entities/user.entity'
import { SENSITIVE_USER_PROPERTIES } from './../../constants/user.constants'
import { deepPropUpdater } from './user-helpers.sanitizer'

export const isObject = (value) => {
  return !!(value && typeof value === 'object' && !Array.isArray(value))
}

export const smart_sanitizer_obj = (obj: any, prop: string) => {
  const initial = Object.assign({}, obj)
  const path_arr = []
  let found_obj = initial
  let final_obj
  let depth = 0
  const check_f_user_prop = (obj: any) => {
    if (isObject(obj)) {
      const entries = Object.entries(obj)
      console.log(entries)
      for (let i = 0; i < entries.length; i += 1) {
        const [objectKey, objectValue] = entries[i]

        if (isObject(objectValue) && objectValue instanceof Object) {
          if (objectKey === prop) {
            path_arr.forEach((el) => {
              console.log(el)
              found_obj = found_obj[el]
            })
            const user_copy = { ...found_obj[prop] }
            SENSITIVE_USER_PROPERTIES.forEach((prop) => delete user_copy[prop])
            final_obj = deepPropUpdater(path_arr, initial, prop, user_copy)
          } else {
            path_arr.push(objectKey)
            depth = +1
            check_f_user_prop(objectValue)
          }
        }
      }
    }
  }
  check_f_user_prop(obj)
  return final_obj
}

export const sanitizeUser = (user: UserEntity | UserEntity[]) => {
  if (user instanceof Array) {
    const users_copy = [...user]
    users_copy.map((user) => {
      const user_copy = { ...user }
      const sanitized_user = SENSITIVE_USER_PROPERTIES.forEach(
        (prop) => delete user_copy[prop],
      )
      return sanitized_user
    })
  }
  if (user instanceof Object) {
    const user_copy = { ...user }

    SENSITIVE_USER_PROPERTIES.forEach((prop) => delete user_copy[prop])
    return user_copy
  }
}

export const sanitizeUser_arr = (arr: any[], prop: string) => {
  const _arr = arr

  for (let i = 0; i < arr.length; i++) {
    console.log(_arr[i][prop])
    const entities: any[] = []
    const entity = sanitizeUser(_arr[i][prop])

    entities.push(entity)

    _arr[i][prop] = entity
  }
  return _arr
}
