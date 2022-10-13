export type roles = 'admin' | 'user'

export interface decodedJwtPayload {
  role: roles
  id: number
  iat: number
  exp: number
}
export type JwtPayLoad = Omit<decodedJwtPayload, 'iat' | 'exp'>

export type tokens = {
  access_token: string
  refresh_token: string
}
export type cookieT = tokens & { token_version: number }
