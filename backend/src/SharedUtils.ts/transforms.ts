export const fromFindAndCount = (
  array: any[],
  key_for_array: string,
  num: number,
) => {
  return {
    [key_for_array]: array,
    totalCount: num,
  }
}
