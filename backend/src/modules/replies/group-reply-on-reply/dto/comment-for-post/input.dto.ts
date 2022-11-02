import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyOForPost_I_G {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyOForPost_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyOForPost_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

}