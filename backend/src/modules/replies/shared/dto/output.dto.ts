import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class isSuccess_Reply {
  @Field()
  isSuccess: boolean
  @Field()
  id: number
}
