import { UserEntity } from '../../../user/entities/user.entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'

@ObjectType()
@Entity('audios')
export class AudioEntity extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity
}
