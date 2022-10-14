import { Field, InputType } from '@nestjs/graphql'
import { PartialType } from '@nestjs/mapped-types'

@InputType()
export class CreateChatInput {
  @Field()
  owner: number
  @Field()
  companion: number
}

@InputType()
export class CreateMessageInput {
  @Field()
  from: number
  @Field()
  to: number
  @Field()
  message: string
  @Field()
  chat_id: number
}

export class UpdateChatDto extends PartialType(CreateChatInput) {
  id: number
}
