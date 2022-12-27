import { ObjectType, Field } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForVideo_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('audio_f_reply_f_video_g')
export class Audio_F_Reply_F_Video_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideo_G)
  @OneToOne(() => ReplyForVideo_G, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForVideo_G
}
