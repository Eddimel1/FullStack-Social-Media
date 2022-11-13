
import { ObjectType, Field } from '@nestjs/graphql'
import { UserEntity } from 'src/modules/users/entities/user.entity'
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('requests')
export class FriendRequest {
  @PrimaryColumn()
  requester_id: number

  @PrimaryColumn()
  accepter_id: number

  @Field()
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'requester_id' })
  requester: UserEntity

  @Field()
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'accepter_id' })
  accepter: UserEntity
}
