import { Res, UseGuards } from '@nestjs/common'
import {
  Args,
  Field,
  GraphQLExecutionContext,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql'
import { Response } from 'express'
import { AuthService } from '../auth-service.service'
import { JwtRefreshGuard } from '../guards/jwt-refresh-guard'
import { Public } from '../decorators/public-decorator'
import { LoginUserInput } from '../dto/input.dto'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
export class messageT {
  @Field({ nullable: true })
  message: boolean
}

@Resolver()
export class AuthResolver {
  constructor(private AuthService: AuthService) {}
  @Public()
  @Mutation(() => UserEntity)
  login(@Res() res, @Args('loginUserInput') loginUserInput: LoginUserInput) {
    const response = res.res as Response
    console.log(response)

    return this.AuthService.login(loginUserInput, response)
  }
  @Public()
  @UseGuards(JwtRefreshGuard)
  @Mutation(() => messageT)
  async refreshToken(_, __, context: GraphQLExecutionContext) {
    const isSuccess = await this.AuthService.updateAccessToken(context)
    return { message: isSuccess }
  }

  @UseGuards(JwtRefreshGuard)
  @Mutation(() => messageT)
  async logOut(_, __, context: GraphQLExecutionContext) {
    const isSuccess = await this.AuthService.logOut(context)
    return { message: isSuccess }
  }
}
