import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class replyO_F_Post_Remove_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}