import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyForPost_I_U {
  @Field()
  commentId: number

  @Field()
  text: string
}


@InputType()
export class UpdateReplyForPost_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyForPost_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

}