import { UserEntity } from 'src/modules/user/entities/user.entity'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('requests')
export class FriendRequest {
  @PrimaryColumn()
  user1_id: number

  @PrimaryColumn()
  user2_id: number

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user1' })
  user1: UserEntity

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user2' })
  user2: UserEntity
}
