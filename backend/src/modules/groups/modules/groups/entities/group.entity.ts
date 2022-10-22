import { ObjectType, Field } from '@nestjs/graphql'
import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('groups')
export class GroupEntity extends BasicEntity {
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

//   @Column()
//   @Field()
//   category: string
}
