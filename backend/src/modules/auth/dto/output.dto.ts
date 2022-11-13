import { Field, ObjectType } from '@nestjs/graphql'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
export class LoginResponse {
  @Field()
  user: UserEntity

  @Field()
  access_token: string

  @Field()
  refresh_token: string
}
