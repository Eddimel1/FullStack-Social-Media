import { ObjectType, Field } from '@nestjs/graphql'
import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'
import { Groups_A_Users_Mediator_E } from 'src/modules/groups/entities/gr-and-u_joined.entity'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { Entity, OneToMany, Column, ManyToOne, JoinColumn } from 'typeorm'

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
