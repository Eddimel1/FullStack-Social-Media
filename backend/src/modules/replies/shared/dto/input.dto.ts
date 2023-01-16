import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateReply {
  @Field({ nullable: true })
  replyId?: number

  @Field({ nullable: true })
  ownerId?: number

  @Field()
  receiverId: number

  @Field()
  text: string

  @Field({ defaultValue: false })
  published: boolean
}

@InputType()
export class UpdateReply {
  @Field()
  replyId: number

  @Field()
  text: string

  @Field({ defaultValue: false })
  published: boolean
}

@InputType()
export class SearchReply {
  @Field()
  replyId: number

  @Field()
  commentId: number
}
