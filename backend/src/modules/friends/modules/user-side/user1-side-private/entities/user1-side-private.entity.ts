import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, OneToOne } from 'typeorm'
import { FriendShip } from '../../../friends/entities/friendship.entity'
import { UserPrivateSide } from '../../shared/entities/user-side-private.base-entity'

@Entity('user1-side-private')
@ObjectType()
export class User1SidePrivate extends UserPrivateSide {

  @Field(() => FriendShip)
  @OneToOne(() => FriendShip, (friendship) => friendship.user1_side_private)
  friendShip: FriendShip
}