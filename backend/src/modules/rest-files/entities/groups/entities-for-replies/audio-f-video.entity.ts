import { ObjectType, Field } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForVideoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('audio_f_reply_f_video_g')
export class Audio_F_Reply_F_Video_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideoEntity_G)
  @OneToOne(() => ReplyForVideoEntity_G, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForVideoEntity_G
}
