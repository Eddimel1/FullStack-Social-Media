import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreatePostInput {
  @Field()
  text: string
}

@InputType()
export class UpdatePostInput {
  @Field()
  postId: number
  @Field()
  text: string
}


@InputType()
export class FindPostInput {
  @Field({ nullable: true })
  userId?: number

  @Field()
  postId: number
}