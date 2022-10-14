import { ObjectType, Field } from '@nestjs/graphql'
import { Mediator } from 'src/BaseEntities/most-base-entities/base.entity'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { GroupEntity } from '../../groups/entities/group.entity'

@ObjectType()
@Entity('groups_users_joined')
export class Groups_A_Users_Mediator_E extends Mediator {
  @PrimaryColumn()
  userId: number

  @PrimaryColumn()
  groupId: number

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.connectionToGroup, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => GroupEntity)
  @ManyToOne(() => GroupEntity, (group) => group.connectionToUser, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'groupId' })
  group: GroupEntity
}
