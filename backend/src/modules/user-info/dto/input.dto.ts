import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
@InputType()
export class CreateUserInfoInput {
  @Field()
  first_name: string

  @Field()
  last_name: string

  @Field({ nullable: true })
  country: string
}

@InputType()
export class UpdateUserInfoInput {
  @Field({ nullable: true })
  first_name?: string

  @Field({ nullable: true })
  last_name?: string

  @Field({ nullable: true })
  country?: string
}
