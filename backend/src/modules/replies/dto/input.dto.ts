import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
@InputType()
export class CreateReplyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateReplyInput extends PartialType(CreateReplyInput) {
  @Field(() => Int)
  id: number
}
