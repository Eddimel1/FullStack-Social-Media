import { Field, ObjectType } from '@nestjs/graphql'
import { GraphQLObjectType } from 'graphql'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { tokens } from './payload'

@ObjectType()
export class LoginResponse {
  @Field()
  user: UserEntity

  @Field()
  access_token: string

  @Field()
  refresh_token: string
}
