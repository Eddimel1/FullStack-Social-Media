import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class replyO_F_Photo_Remove_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}