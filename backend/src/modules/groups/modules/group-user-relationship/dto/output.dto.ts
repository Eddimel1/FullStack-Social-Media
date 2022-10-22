import { Field, ObjectType } from '@nestjs/graphql'



@ObjectType()
export class isSuccess_G {
  @Field()
  groupId: number
  @Field()
  userId: number
  @Field()
  isSuccess: boolean
}
