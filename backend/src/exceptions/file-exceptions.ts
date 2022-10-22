import { BadRequestException } from '@nestjs/common'

export class NotValidFileFormat extends BadRequestException {
  constructor() {
    super('file format is not valid')
  }
}
