import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core'
@Injectable()
export class JwtSocketGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super()
  }
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)

    console.log(
      'ACCESS TOKEN : ',
      ctx
        .getContext()
        .extra.request.rawHeaders.find((el) => el.includes('access_token'))
        .split(';')
        .find((el) => el.includes('access_token'))
        .split('=')[1],
    )

    //@ts-ignore
    return ctx.getContext().extra.request
  }
}
