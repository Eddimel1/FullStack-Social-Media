import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyOForPhoto_I_G {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyOForPhoto_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyOForPhoto_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

}
