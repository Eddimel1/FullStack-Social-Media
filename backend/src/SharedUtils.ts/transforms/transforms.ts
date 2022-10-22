
export const fromFindAndCount = (
  array: [any[], number],
  key_for_array: string,
) => {
  return {
    [key_for_array]: array[0],
    totalCount: array[1],
  }
}
