import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { BaseAudioEntity } from '../../../../../typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForPost_G } from '../../../../replies/group-replies/entities/reply-f-post.entity'

@ObjectType()
@Entity('audio_f_reply_f_post_g')
export class Audio_F_Reply_F_Post_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPost_G)
  @OneToOne(() => ReplyForPost_G, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForPost_G
}
