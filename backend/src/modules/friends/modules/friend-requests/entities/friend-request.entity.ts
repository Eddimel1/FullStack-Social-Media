import { UserEntity } from 'src/modules/user/entities/user.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('requests')
export class FriendRequest {
  @PrimaryColumn()
  requester_id: number

  @PrimaryColumn()
  accepter_id: number

  @Field()
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'requester_id' })
  requester: UserEntity

  @Field()
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'accepter_id' })
  accepter: UserEntity
}
