import { isObject } from '../sanitizers/user.sanitizer'

export const propSeeker = (obj: Record<any, any>, prop: string) => {
  let found: boolean
  let found_value
  const _seek = (obj, prop) => {
    const entries = Object.entries(obj)
    for (let i = 0; i < entries.length; i += 1) {
      const [objectKey, objectValue] = entries[i]
      if (objectKey === prop) {
        found = true
        found_value = objectValue
        return
      } else if (
        !(objectKey === prop) &&
        !found_value &&
        isObject(objectValue)
      ) {
        _seek(objectValue, prop)
      }
    }
    if (found_value) return
  }
  if (isObject(obj)) {
    _seek(obj, prop)
  } else {
    return obj
  }
  return found_value
}
