import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class NestJwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super()
  }

  getRequest(context: ExecutionContext) {
    console.log(context.switchToHttp().getRequest().cookies)
    return context.switchToHttp().getRequest()
  }
}

