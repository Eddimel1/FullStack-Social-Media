import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreatePostsForGroupInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdatePostsForGroupInput extends PartialType(
  CreatePostsForGroupInput,
) {
  @Field(() => Int)
  id: number
}
