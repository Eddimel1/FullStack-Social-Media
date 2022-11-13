import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('galery_audios_u')
export class Galery_Audio_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity
}
