import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateGroupsUsersJoinedInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateGroupsUsersJoinedInput extends PartialType(
  CreateGroupsUsersJoinedInput,
) {
  @Field(() => Int)
  id: number
}
