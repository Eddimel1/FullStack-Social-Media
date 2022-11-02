import { findAll_Generic_O } from 'src/sharedDtos/output.dto'
import { DEFAULT_PORTION } from './../../constants/db.constants'

export const fromFindAndCount = (
  array: [any[], number],
  key_for_array: string,
) => {
  return {
    [key_for_array]: array[0],
    totalCount: array[1],
  }
}

export const forPagination = <T>(
  array: [T[], number],
): findAll_Generic_O<T> => {
  return {
    items: array[0],
    totalCount: array[1],
    portion: DEFAULT_PORTION,
  }
}
