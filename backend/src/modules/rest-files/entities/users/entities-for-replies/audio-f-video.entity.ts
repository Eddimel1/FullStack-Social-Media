import { ObjectType, Field } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForVideoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'

import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('audio_f_reply_f_video_u')
export class Audio_F_Reply_F_Video_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideoEntity_U)
  @OneToOne(() => ReplyForVideoEntity_U, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForVideoEntity_U
}
