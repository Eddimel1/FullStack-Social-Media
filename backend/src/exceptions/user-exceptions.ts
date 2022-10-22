import { BadRequestException, UnauthorizedException } from '@nestjs/common'

export class UserAlreadyExists_EX extends BadRequestException {
  constructor(user: string, email: string) {
    super(`user with username {${user}} or email {${email}} is already exists`)
  }
}

export class WrongPasswordOrEmail_EX extends BadRequestException {
  constructor() {
    super(`wrong email or password`)
  }
}

export class GroupOwnershipValidation_EX extends UnauthorizedException {
  constructor(userId: number, groupId: number) {
    super(`user with id ${userId} is not owner of the group with id ${groupId}`)
  }
}

export class ActionDenied_EX extends UnauthorizedException {
  constructor(userId: number, action: string) {
    super(`user with id ${userId} can not perform ${action}`)
  }
}
