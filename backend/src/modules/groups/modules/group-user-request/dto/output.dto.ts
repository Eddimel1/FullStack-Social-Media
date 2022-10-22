import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class DeleteRequest_O {
  @Field()
  groupId: number
  @Field()
  userId: number
  @Field()
  isSuccess: boolean
}
