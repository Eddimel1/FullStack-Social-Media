import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'

@ObjectType()
@Entity('cover_g')
export class G_Cover_EN extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => GroupEntity)
  @OneToOne(() => GroupEntity, (group) => group.cover, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  group: GroupEntity
}
