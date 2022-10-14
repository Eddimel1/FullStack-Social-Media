import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateGroupSideInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateGroupSideInput extends PartialType(CreateGroupSideInput) {
  @Field(() => Int)
  id: number
}
