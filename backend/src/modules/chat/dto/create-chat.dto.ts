import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateChatInput {
  @Field()
  owner: number
  @Field()
  companion: number
 
 
}
