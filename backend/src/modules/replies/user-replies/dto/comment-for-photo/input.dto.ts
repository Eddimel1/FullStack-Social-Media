import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyForPhoto_I_U {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyForPhoto_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyForPhoto_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

}
