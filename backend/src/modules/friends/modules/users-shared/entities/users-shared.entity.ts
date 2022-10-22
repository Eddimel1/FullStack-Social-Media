
import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, OneToOne} from 'typeorm'
import { FriendShip } from '../../friends/entities/friendship.entity'
import { UserSide } from '../../user-side/shared/entities/user-side.base-entity'



@Entity('users-shared-side')
@ObjectType()
export class UsersSharedSide extends UserSide  {

  @Field(() => FriendShip)
  @OneToOne(() => FriendShip, (friendship) => friendship.users_shared_side)
  friendShip: FriendShip
}
