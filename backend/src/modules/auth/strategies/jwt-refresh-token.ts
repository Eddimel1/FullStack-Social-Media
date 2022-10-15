import { ConfigService } from '@nestjs/config'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { AuthService } from '../auth-service.service'
import { Request } from 'express'
import { UserService } from 'src/modules/user/services/user.service'
import { UsersRefreshTokenInput } from 'src/modules/user/types/types'
import { decodedJwtPayload } from '../types/types'

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private userService: UserService, configService: ConfigService) {
    super({
      ignoreExpiration: false,
      passReqToCallback: true,

      secretOrKey: configService.get<string>('RT_SECRET'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const refresh_token = request?.cookies['refresh_token']
          if (!refresh_token) {
            return null
          }
          return refresh_token
        },
      ]),
    })
  }

  async validate(req: Request, payload: decodedJwtPayload) {
    if (!payload) {
      throw new BadRequestException('no payload')
    }
    const refresh_token = req?.cookies['refresh_token']
    const token_version = req?.cookies['token_version']
    if (!refresh_token) {
      throw new BadRequestException('no active token')
    }
    const user = await this.userService.getOneUser(payload.id)
    const isTokenValid = refresh_token === user.r_token
    const isVersionValid = token_version === user.r_token_version

    if (!user || !isTokenValid || isVersionValid) {
      throw new UnauthorizedException('invalid refresh token')
    }
    const data_for_update = {
      r_token: user.r_token,
      r_token_version: user.r_token_version + 1,
      id: user.id,
    } as UsersRefreshTokenInput
    await this.userService.updateTokens(data_for_update)
    const updatedUser = await this.userService.getOneUser(user.id)
    console.log(updatedUser)
    return updatedUser
  }
}
