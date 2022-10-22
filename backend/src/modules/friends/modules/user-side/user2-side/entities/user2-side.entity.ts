import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { FriendShip } from '../../../friends/entities/friendship.entity'
import { UserSide } from '../../shared/entities/user-side.base-entity'

@Entity('user2-side')
@ObjectType()
export class User2Side extends UserSide {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => FriendShip)
  @OneToOne(() => FriendShip, (friendship) => friendship.user1_side)
  friendShip: FriendShip
}
