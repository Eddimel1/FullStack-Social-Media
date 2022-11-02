import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class replyO_F_Video_Remove_O {
  @Field()
  videoId: number
  @Field()
  isDeleted: boolean
}