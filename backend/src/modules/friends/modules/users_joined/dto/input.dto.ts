import { InputType, Field, Int, PartialType } from '@nestjs/graphql'


@InputType()
export class CreateUsersJoinedInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateUsersJoinedInput extends PartialType(
  CreateUsersJoinedInput,
) {
  @Field(() => Int)
  id: number
}
