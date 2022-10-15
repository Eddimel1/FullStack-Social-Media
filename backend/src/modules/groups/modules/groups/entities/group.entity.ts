import { ObjectType, Field } from '@nestjs/graphql'
import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { Entity, OneToMany, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Groups_A_Users_Mediator_E } from '../../groups-users-joined/entities/groups-users-joined.entity'

@ObjectType()
@Entity('groups')
export class GroupEntity extends BasicEntity {
  @Field(() => [Groups_A_Users_Mediator_E])
  @OneToMany(() => Groups_A_Users_Mediator_E, (group) => group.user)
  connectionToUser: Groups_A_Users_Mediator_E[]

  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.owned_groups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  slogan: string
}
