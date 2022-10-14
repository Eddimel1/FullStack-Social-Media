import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateGroupInfoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateGroupInfoInput extends PartialType(CreateGroupInfoInput) {
  @Field(() => Int)
  id: number
}
