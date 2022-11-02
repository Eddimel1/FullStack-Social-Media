import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'

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
  group: GroupEntity
}
