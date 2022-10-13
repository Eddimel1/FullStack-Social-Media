import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCommentForVideo_I {
  @Field()
  videoId: number

  @Field()
  text: string
}


@InputType()
export class UpdateCommentForVideo_I {
  @Field()
  videoId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchCommentForVideo_I {
  @Field()
  videoId: number

  @Field()
  commentId: number

}