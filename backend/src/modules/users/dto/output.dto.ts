import { ObjectType, Field, Int } from '@nestjs/graphql'
import { UserEntity } from '../entities/user.entity'

@ObjectType()
export class getAllUser_O {
  @Field(() => [UserEntity])
  users: UserEntity[]

  @Field(() => Int)
  totalCount: number
}

@ObjectType()
export class getOneUser_O {
  @Field(() => UserEntity)
  user: UserEntity

  @Field(() => Boolean)
  is_my_user: boolean
}
