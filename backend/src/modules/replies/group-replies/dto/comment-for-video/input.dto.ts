import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyForVideo_I_G {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyForVideo_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyForVideo_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

}