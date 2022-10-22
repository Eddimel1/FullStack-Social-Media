import { FriendRequest } from './../entities/friend-request.entity'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FindAndCountRequests_O {
  @Field(() => [FriendRequest])
  requests: FriendRequest[]

  @Field()
  totalCount: number
}

@ObjectType()
export class CreatedRequest_O {
  @Field()
  requester_id: number

  @Field()
  accepter_id: number

  @Field()
  isSuccess: boolean
}
