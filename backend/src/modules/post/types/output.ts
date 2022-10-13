import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class postRemove_O {
  @Field()
  postId: number
  @Field()
  isDeleted: boolean
}
