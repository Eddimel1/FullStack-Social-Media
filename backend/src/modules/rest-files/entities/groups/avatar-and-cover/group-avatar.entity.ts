import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'

@ObjectType()
@Entity('avatar_g')
export class G_Avatar_EN extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => GroupEntity)
  @OneToOne(() => GroupEntity, (group) => group.avatar, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: GroupEntity
}
