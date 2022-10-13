import { CreateUserInfoInput } from './create-user-info.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInfoInput {
  @Field({ nullable: true })
  first_name?: string

  @Field({ nullable: true })
  last_name?: string

  @Field({ nullable: true })
  country?: string
}
