import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

//Templates should be taken from dist folder , but there is some problem adding assets to the dist folder
//It is taken from non-compiled code instead
@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendUserConfirmation(email: string, username: string, token: string) {
    const url = `${this.configService.get('BASE_URL')}/confirm/${token}`
    console.log(url)
    const response = await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: '../../../../../../src/assets/templates/confirmation', // `.hbs` extension is appended automatically
      context: {
        url,
        name: username,
      },
    })
    console.log(response)
    return response
  }

  async sendResetPasswordToken(email: string, username: string, token: string) {
    const url = `${this.configService.get('BASE_URL')}/reset/password/${token}`
    console.log(url)
    const response = await this.mailerService.sendMail({
      to: email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Reset Your Password',
      template: '../../../../../../src/assets/templates/resetPassword', // `.hbs` extension is appended automatically
      context: {
        url,
        name: username,
      },
    })
    console.log(response)
    return response
  }
}

