import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'

@ObjectType()
@Entity('galery_audios_g')
export class Galery_Audio_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => GroupEntity)
  @ManyToOne(() => GroupEntity, (group) => group.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: GroupEntity
}
