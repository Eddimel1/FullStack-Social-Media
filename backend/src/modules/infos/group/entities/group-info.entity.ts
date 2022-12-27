import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { BasicEntity } from 'src/typeOrm/baseEntities/most-base-entities/base.entity'

@Entity('group-info')
@ObjectType()
export class GroupInfo extends BasicEntity {
  @Column()
  @Field()
  ownerId: number

  @Column()
  @Field()
  description: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  status: string

  @Field(() => GroupEntity)
  @OneToOne(() => GroupEntity, (group) => group.group_info, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: GroupEntity
}
