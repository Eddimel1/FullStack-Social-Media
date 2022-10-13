import { Request, Response } from 'express'
type objectT = 'res' | 'req'
export const loggerMiddleWare = (
  req: Request,
  res: Response,
  next,
  object?: objectT,
) => {
    
  if (object === 'req') console.log('REQUEST : ', req)
  else if (object === 'res') console.log('RESPONSE : ', res)
  next()
}

// export const logReq = <T extends keyof Request, K extends keyof Request[T]>(
//   req: Request,
//   res: Response,
//   next,
//   key: [T, K],
// ) => {

//   next()
// }
