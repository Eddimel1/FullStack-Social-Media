import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateReply {
  @Field({ nullable: true })
  replyId?: number

  @Field({ nullable: true })
  ownerId?: number

  @Field()
  text: string
}

@InputType()
export class UpdateReply {
  @Field()
  replyId: number

  @Field()
  text: string
}

@InputType()
export class SearchReply {
  @Field()
  replyId: number

  @Field()
  commentId: number
}
