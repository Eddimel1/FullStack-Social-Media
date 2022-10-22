import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, OneToOne } from 'typeorm'
import { FriendShip } from '../../../friends/entities/friendship.entity'
import { UserSide } from '../../shared/entities/user-side.base-entity'

@Entity('user1-side')
@ObjectType()
export class User1Side extends UserSide {
  @Field(() => FriendShip)
  @OneToOne(() => FriendShip, (friendship) => friendship.user1_side, {
    cascade: true,
  })
  friendShip: FriendShip
}
