import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class comment_F_Photo_Remove_O {
  @Field()
  photoId: number
  @Field()
  isDeleted: boolean
}