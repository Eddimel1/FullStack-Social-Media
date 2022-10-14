import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateUsersSharedInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateUsersSharedInput extends PartialType(
  CreateUsersSharedInput,
) {
  @Field(() => Int)
  id: number
}
