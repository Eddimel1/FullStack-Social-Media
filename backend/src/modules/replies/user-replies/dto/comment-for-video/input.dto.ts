import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateReplyForVideo_I_U {
  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class UpdateReplyForVideo_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchReplyForVideo_I_U {
  @Field()
  replyId: number

  @Field()
  commentId: number
}
