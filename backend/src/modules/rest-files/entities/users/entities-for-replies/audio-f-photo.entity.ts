import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForPhoto_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'

@ObjectType()
@Entity('audio_f_reply_f_photo_u')
export class Audio_F_Reply_F_Photo_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhoto_U)
  @OneToOne(() => ReplyForPhoto_U, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForPhoto_U
}
