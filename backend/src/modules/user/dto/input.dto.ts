import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field()
  email: string
  @Field()
  password: string
  @Field()
  username: string
}

@InputType()
export class SensitiveUserInput {
  @Field(() => ID)
  id: number

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  username: string
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  username: string
}


