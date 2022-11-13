import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common'

export class NotValidFileFormat extends BadRequestException {
  constructor() {
    super('file format is not valid')
  }
}

export class WasNotDeleted_EX extends HttpException {
  constructor(type: string) {
    super(`${type} format is not valid`, HttpStatus.NOT_MODIFIED)
  }
}
