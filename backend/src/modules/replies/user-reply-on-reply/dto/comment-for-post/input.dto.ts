import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyOForPost_I_U {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyOForPost_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyOForPost_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

}