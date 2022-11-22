import { AuthService } from './../auth-service.service'
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common'
import { UserService } from 'src/modules/users/services/user.service'
import { Public } from 'src/modules/auth/decorators/public-decorator'
import { NestJwtAuthGuard } from '../guards/nestj-auth-guard'
import { JwtService } from '@nestjs/jwt'
import { Context } from '@nestjs/graphql'
import path from 'path'

@Public()
@Controller()
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @UseGuards(NestJwtAuthGuard)
  @Get('/confirm/:token')
  async confirmUser(
    @Param('token') token: string,
    @Context() context,
    @Res() res,
  ) {
    const userId = context.req.user.id
    const result = await this.AuthService.confirmUser(token, userId)
    res.send(result.raw[0])
  }

  @Post('/reset/password/request')
  async resetRequest(@Body() body: { email: string }) {
    const { email } = body
    console.log(body)
    return await this.AuthService.sendResetPasswordToken(email)
  }

  @Get('/reset/password/:token')
  async createNewPassword(@Param() token: { token: string }, @Res() res) {
    const isSuccess = await this.AuthService.verifyResetToken(token.token)
    console.log(isSuccess)
    if (isSuccess.isSuccess) {
       
      const file = path.join(
        __dirname,
        '../../../../../../storage/html/resetPassword.html',
      )
      res.sendFile(file)
    }
  }

  @Post('/reset/password')
  async refreshPassword(
    @Body() resetInput: { password: string; email: string },
    @Res() response,
  ) {
    const { password, email } = resetInput
    const res = await this.AuthService.resetPassword(password, email)
    return response.send(res)
  }
}
