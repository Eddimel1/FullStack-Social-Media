import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateUserInfoInput {

  @Field()
  first_name: string

  @Field()
  last_name: string

  @Field({ nullable: true })
  country: string
}
