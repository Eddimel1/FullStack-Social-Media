import { MailService } from 'src/modules/mails/services/mails.service'
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
import { UserAuthService } from '../users/services/user-auth.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly userAuthService: UserAuthService,
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
      await this.userAuthService.updateTokens({
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
  async updateAccessToken(context: any) {
    const user = context.req.user

    const payload: JwtPayLoad = { id: user.id, role: user.role }

    const new_access_token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('AT_SECRET'),
      expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
    })
    context.res.cookie(TOKEN_VERSION, user.r_token_version, {
      httpOnly: true,
    })

    context.res.cookie(ACCESS_TOKEN, new_access_token, { httpOnly: true })
  }

  async logOut(context: any) {
    const user = context.req.user

    context.res.clearCookie(ACCESS_TOKEN, { httpOnly: true })
    context.res.clearCookie(REFRESH_TOKEN, { httpOnly: true })
    context.res.clearCookie(TOKEN_VERSION, { httpOnly: true })
    const isSuccess = await this.userAuthService.logOutUser(user.id)
    return isSuccess
  }

  async confirmUser(token: string, userId) {
    try {
      const jwt = await this.jwtService.verifyAsync(token, {
        secret: `${this.configService.get('MAIL_SECRET')}`,
      })
      console.log(jwt)
      const confirmed = await this.userAuthService.confirmUser(jwt.id)
      console.log(confirmed)
      return confirmed
    } catch (error) {
      console.log(error)
    }
  }

  async sendResetPasswordToken(email: string) {
    try {
      const user = await this.userService.getOneUserByEmail(email)

      const jwt = await this.jwtService.signAsync(
        { id: user.id },
        {
          secret: `${this.configService.get('RESET_SECRET')}`,
          expiresIn: '60m',
        },
      )
      await this.mailService.sendResetPasswordToken(
        user.email,
        user.username,
        jwt,
      )
      return { sended: true }
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
  async createResetPasswordRequest(token: string) {
    const jwt = await this.jwtService.verifyAsync(token, {
      secret: `${this.configService.get('RESET_SECRET')}`,
    })
    if (!jwt) {
      throw new Error('link is not a valid')
    }
    const isCreated = await this.userAuthService.updateResetToken(jwt.id, token)
    console.log(isCreated.raw[0])
    return { isSuccess: `${isCreated.affected > 0 ? true : false}` }
  }

  async resetPassword(password: string, email: string) {
    console.log('PASSWORD : ', password, 'EMAIL : ', email)
    try {
      const user = await this.userService.getOneUserByEmail(email)
      const jwt = await this.jwtService.verifyAsync(user.reset_token, {
        secret: `${this.configService.get('RESET_SECRET')}`,
      })
      const updated = await this.userAuthService.updatePassword(
        jwt.id,
        password,
      )
      if (updated) {
        return {
          isSuccess: true,
          redirect_url: `${this.configService.get('FRONTEND_URL')}`,
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  async verifyResetToken(token: string) {
    const jwt = await this.jwtService.verifyAsync(token.toString(), {
      secret: `${this.configService.get('RESET_SECRET')}`,
    })
    console.log(jwt)
    if (jwt) {
      console.log('JWT IS VALID')
      const isCreated = await this.userAuthService.updateResetToken(
        jwt.id,
        token,
      )
      console.log(isCreated.raw[0])
      return { isSuccess: `${isCreated.affected > 0 ? true : false}` }
    } else throw new Error('token is not valid')
  }
}
