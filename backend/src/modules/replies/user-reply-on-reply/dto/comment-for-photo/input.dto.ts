import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyOForPhoto_I_U {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyOForPhoto_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyOForPhoto_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

}
