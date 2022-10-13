import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Roles } from '../decorators/roles-decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ])
    if (!requiredRoles) {
      return true
    }
    const ctx = GqlExecutionContext.create(context)
    const { user } = ctx.getContext().req
    console.log(user)
    return requiredRoles.some((role) => user.role?.includes(role))
  }
}
