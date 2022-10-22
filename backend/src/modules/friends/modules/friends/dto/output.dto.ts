import { SanitizedUser } from './../../../../user/entities/user.entity'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FindAndCountFriends_O {
  @Field(() => [SanitizedUser])
  friends: SanitizedUser[]

  @Field()
  totalCount: number
}


@ObjectType()
export class IsSuccess_O {
  @Field()
  friendId: number

  @Field()
  isSuccess: boolean
}
