import { BadRequestException } from '@nestjs/common'

export class UserAlreadyExists_E extends BadRequestException {
  constructor(user: string, email: string) {
    super(
      `user with this username : ${user} or this email : ${email} already exists`,
    )
  }
}
