import { ObjectType, Field, Int } from '@nestjs/graphql'
import { UserEntity } from 'src/modules/users/entities/user.entity'
import { PrimaryColumn, ManyToOne, JoinColumn, Entity, OneToOne } from 'typeorm'
import { User1SidePrivate } from '../../user-side/user1-side-private/entities/user1-side-private.entity'
import { User1Side } from '../../user-side/user1-side/entities/user1-side.entity'
import { User2SidePrivate } from '../../user-side/user2-side-private/entities/user2-side-private.entity'
import { User2Side } from '../../user-side/user2-side/entities/user2-side.entity'
import { UsersSharedSide } from '../../users-shared/entities/users-shared.entity'

@Entity('friendship')
@ObjectType()
export class FriendShip {
  @PrimaryColumn()
  user1_id: number

  @PrimaryColumn()
  user2_id: number

  @PrimaryColumn()
  user1_side_id: number

  @PrimaryColumn()
  user2_side_id: number

  @PrimaryColumn()
  user1_side_private_id: number

  @PrimaryColumn()
  user2_side_private_id: number

  @PrimaryColumn()
  users_shared_side_id: number

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user1_id' })
  user1: UserEntity

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user2_id' })
  user2: UserEntity

  @Field(() => User1Side)
  @OneToOne(() => User1Side, (user1side) => user1side.friendShip, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user1_side_id' })
  user1_side: User1Side

  @Field(() => User2Side)
  @OneToOne(() => User2Side, (user2side) => user2side.friendShip, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user2_side_id' })
  user2_side: User2Side

  @Field(() => User1SidePrivate)
  @OneToOne(
    () => User1SidePrivate,
    (user1side_private) => user1side_private.friendShip,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'user1_side_private_id' })
  user1_side_private: User1SidePrivate

  @Field(() => User2SidePrivate)
  @OneToOne(
    () => User2SidePrivate,
    (user2side_private) => user2side_private.friendShip,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'user2_side_private_id' })
  user2_side_private: User2SidePrivate

  @Field(() => UsersSharedSide)
  @OneToOne(
    () => UsersSharedSide,
    (user2side_private) => user2side_private.friendShip,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'users_shared_side_id' })
  users_shared_side: UsersSharedSide
}
