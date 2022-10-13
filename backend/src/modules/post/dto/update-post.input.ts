import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { CreatePostInput } from './create-post.input'

@InputType()
export class UpdatePostInput {
  @Field()
  postId: number
  @Field()
  text: string
}
