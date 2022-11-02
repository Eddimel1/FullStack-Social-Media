import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyOForVideo_I_U {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyOForVideo_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyOForVideo_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

}