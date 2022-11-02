import { ObjectType, Field } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { ReplyOForVideoEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-video.entity'

import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('audio_f_replyo_f_video_g')
export class Audio_F_ReplyO_F_Video_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForVideoEntity_G)
  @OneToOne(() => ReplyOForVideoEntity_G, (replyo) => replyo.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForVideoEntity_G
}
