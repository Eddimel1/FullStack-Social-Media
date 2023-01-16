import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { BaseAudioEntity } from '../../../../../typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForPhoto_G } from '../../../../replies/group-replies/entities/reply-f-photo.entity'

@ObjectType()
@Entity('audio_f_reply_f_photo_g')
export class Audio_F_Reply_F_Photo_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhoto_G)
  @OneToOne(() => ReplyForPhoto_G, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForPhoto_G
}
