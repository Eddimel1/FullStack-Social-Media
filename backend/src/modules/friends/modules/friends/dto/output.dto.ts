import { Field, ObjectType } from '@nestjs/graphql'
import { SanitizedUser } from 'src/modules/users/entities/user.entity'

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
