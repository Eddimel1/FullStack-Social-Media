import { ObjectType, Field, Int } from '@nestjs/graphql'
import { UserEntity } from '../entities/user.entity'

@ObjectType()
export class getAllUser_O {
  @Field((type) => [UserEntity])
  users: UserEntity[]

  @Field((type) => Int)
  totalCount: number
}
