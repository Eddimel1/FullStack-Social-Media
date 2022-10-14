import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MessageOutput {
  @Field()
  createdAt: Date
  @Field()
  updatedAt: Date
  @Field()
  from: number
  @Field()
  to: number
  @Field()
  message: string
}
