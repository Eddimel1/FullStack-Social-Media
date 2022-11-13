export const deepPropUpdater = (
  path: string[],
  obj: any,
  prop: string,
  update: any,
) => {

  const depth = path.length
  console.log(depth)
  for (let i = 0; i <= depth; i = +depth) {
   
    const _1 = path[i]
    const _2 = path[i + 1]
    const _3 = path[i + 2]
    const _4 = path[i + 3]
    const _5 = path[i + 4]
    switch (depth) {
      case 1:
        obj[_1][prop] = update
        return obj
      case 2:
        obj[_1][_2][prop] = update
        return obj
      case 3:
        obj[_1][_2][_3][prop] = update
        return obj
      case 4:
        obj[_1][_2][_3][_4][prop] = update
        return obj
      case 5:
        obj[_1][_2][_3][_4][_5][prop] = update
        return obj

      default:
        throw new Error('max depth is 5')
    }
  }
}
