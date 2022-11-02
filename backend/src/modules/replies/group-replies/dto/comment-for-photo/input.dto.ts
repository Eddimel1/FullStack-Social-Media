import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyForPhoto_I_G {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyForPhoto_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyForPhoto_I_G {
  @Field()
  replyId: number

  @Field()
  commentId: number

}
