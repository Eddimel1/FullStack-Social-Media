import { HttpException, HttpStatus } from '@nestjs/common'

export class WasNotUpdated_EX extends HttpException {
  constructor(entity: string) {
    super(`${entity} was not updated`, HttpStatus.NOT_MODIFIED)
  }
}

export class WasNotFound_EX extends HttpException {
  constructor(entity: string) {
    super(`${entity} was not found`, HttpStatus.UNPROCESSABLE_ENTITY)
  }
}

export class WereNotFound_EX extends HttpException {
  constructor(entity: string) {
    super(`${entity} were not found`, HttpStatus.NOT_MODIFIED)
  }
}

export class WasNotCreated_EX extends HttpException {
  constructor(entity: string) {
    super(`${entity} was not created`, HttpStatus.NOT_MODIFIED)
  }
}

export class AlreadyExists_EX extends HttpException {
  constructor(entity: string) {
    super(`this ${entity} already exists`, HttpStatus.UNPROCESSABLE_ENTITY)
  }
}
