import { ConfigService } from '@nestjs/config'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('AT_SECRET'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const access_token_for_sockets = request.rawHeaders
            .find((el) => el.includes('access_token'))
            .split(';')
            .find((el) => el.includes('access_token'))
            .split('=')[1]
          const access_token = request?.cookies?.access_token
          if (!access_token) {
            return access_token_for_sockets
          } else {
            return access_token
          }
        },
      ]),
    })
  }

  async validate(payload: any) {
    console.log('is valid')
    console.log(payload)
    if (payload === null) {
      throw new UnauthorizedException()
    }
    return payload
  }
}
