import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateUserSide {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateUserSide extends PartialType(CreateUserSide) {
  @Field(() => Int)
  id: number
}
