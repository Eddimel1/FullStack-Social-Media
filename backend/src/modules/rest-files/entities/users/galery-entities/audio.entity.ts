import { UserEntity } from '../../../../user/entities/user.entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'

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
