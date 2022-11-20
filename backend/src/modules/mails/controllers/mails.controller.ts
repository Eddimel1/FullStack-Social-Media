import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { Public } from 'src/modules/auth/decorators/public-decorator'

import { MailService } from '../services/mails.service'

@Controller('/mails')
export class MailsController {
  constructor(private readonly mailsService: MailService) {}
    @Public()
  @Get('/confirm')
  sendUserConfirmation() {
    return this.mailsService.sendUserConfirmation(
      'eduardmelentjev@gmail.com',
      '123',
    )
  }
}
