import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class comment_F_Post_Remove_O {
  @Field()
  postId: number
  @Field()
  isDeleted: boolean
}