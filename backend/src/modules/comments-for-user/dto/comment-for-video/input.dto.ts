import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCommentForVideo_I_U {
  @Field()
  videoId: number

  @Field()
  text: string
}


@InputType()
export class UpdateCommentForVideo_I_U {
  @Field()
  videoId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchCommentForVideo_I_U {
  @Field()
  videoId: number

  @Field()
  commentId: number

}