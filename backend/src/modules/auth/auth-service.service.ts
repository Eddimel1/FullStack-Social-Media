import { GraphQLExecutionContext } from '@nestjs/graphql'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

import { Response } from 'express'
import {
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRATION_TIME,
  AT_SECRET,
  COOKIE_MAX_AGE,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRATION_TIME,
  RT_SECRET,
  TOKEN_VERSION,
} from 'src/global/constants/auth.constants'
import { LoginUserInput } from './dto/input.dto'
import { roles, tokens, JwtPayLoad } from './types/types'
import { UserService } from '../users/services/user.service'
@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const user = await this.userService.getOneUserByUserName(username)

    const isValid = password && (await bcrypt.compare(password, user.password))
    if (user && isValid) {
      const { password, ...serializedUser } = user

      return serializedUser
    }

    return null
  }
  async login(loginUserInput: LoginUserInput, response: Response) {
    const user = await this.validateUser(
      loginUserInput.username,
      loginUserInput.password,
    )
        
    if (user) {
      const tokens = await this.getTokens(user.id, user.role)
      console.log(tokens)
      response.cookie(ACCESS_TOKEN, tokens.access_token, {
        httpOnly: true,
        maxAge: COOKIE_MAX_AGE,
      })
      response.cookie(REFRESH_TOKEN, tokens.refresh_token, {
        httpOnly: true,
        maxAge: COOKIE_MAX_AGE,
      })
      response.cookie(TOKEN_VERSION, user.r_token_version, {
        httpOnly: true,
        maxAge: COOKIE_MAX_AGE,
      })
      await this.userService.updateTokens({
        id: user.id,
        r_token: tokens.refresh_token,
      })
    }

    if (user) return user
    return new UnauthorizedException('invalid password or username')
  }
  async getTokens(userId: number, role: roles): Promise<tokens> {
    const jwtPayload: JwtPayLoad = {
      id: userId,
      role: role,
    }

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>(AT_SECRET),
        expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>(RT_SECRET),
        expiresIn: REFRESH_TOKEN_EXPIRATION_TIME,
      }),
    ])

    return {
      access_token: at,
      refresh_token: rt,
    }
  }
  async updateAccessToken(context: GraphQLExecutionContext) {
    //@ts-ignore
    const user = context.req.user
    //@ts-ignore
    const payload: JwtPayLoad = { id: user.id, role: user.role }
    //@ts-ignore
    const new_access_token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('AT_SECRET'),
      expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
    })
    //@ts-ignore
    context.res.cookie(TOKEN_VERSION, user.r_token_version, {
      httpOnly: true,
    })
    //@ts-ignore
    context.res.cookie(ACCESS_TOKEN, new_access_token, { httpOnly: true })
  }

  async logOut(context: GraphQLExecutionContext) {
    //@ts-ignore
    const user = context.req.user
    //@ts-ignore
    context.res.clearCookie(ACCESS_TOKEN, { httpOnly: true })
    //@ts-ignore
    context.res.clearCookie(REFRESH_TOKEN, { httpOnly: true })
    //@ts-ignore
    context.res.clearCookie(TOKEN_VERSION, { httpOnly: true })
    const isSuccess = await this.userService.logOutUser(user.id)
    return isSuccess
  }
}
