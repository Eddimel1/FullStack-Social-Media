import { ObjectType, Field } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { ReplyOForVideoEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-video.entity'

import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('audio_f_replyo_f_video_u')
export class Audio_F_ReplyO_F_Video_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForVideoEntity_U)
  @OneToOne(() => ReplyOForVideoEntity_U, (replyo) => replyo.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForVideoEntity_U
}
