import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCommentForPost_I_G {
  @Field()
  postId: number

  @Field()
  text: string
}


@InputType()
export class UpdateCommentForPost_I_G {
  @Field()
  postId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchCommentForPost_I_G {
  @Field()
  postId: number

  @Field()
  commentId: number

}