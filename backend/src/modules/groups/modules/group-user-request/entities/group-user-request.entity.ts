import { ObjectType, Field } from '@nestjs/graphql'
import { UserEntity } from 'src/modules/users/entities/user.entity'
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm'
import { GroupEntity } from '../../groups/entities/group.entity'

@ObjectType()
@Entity('group-user-requests')
export class GroupUserRequest {
  @PrimaryColumn()
  groupId: number

  @PrimaryColumn()
  userId: number

  @Field()
  @ManyToOne(() => GroupEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'groupId' })
  group: GroupEntity

  @Field()
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field()
  @Column()
  group_as_what: 'requester' | 'accepter'

  @Field()
  @Column()
  user_as_what: 'requester' | 'accepter'
}
