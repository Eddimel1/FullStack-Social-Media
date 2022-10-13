import { Field, InputType } from '@nestjs/graphql'

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
