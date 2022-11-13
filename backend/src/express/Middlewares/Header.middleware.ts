import { Request, Response, NextFunction } from 'express'
export const addResponseHeaders = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    res.append('Access-Control-Allow-Private-Network', 'true')
  next()
  
}
