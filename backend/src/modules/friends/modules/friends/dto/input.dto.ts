
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateFriendInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateFriendInput extends PartialType(CreateFriendInput) {
  @Field(() => Int)
  id: number
}
