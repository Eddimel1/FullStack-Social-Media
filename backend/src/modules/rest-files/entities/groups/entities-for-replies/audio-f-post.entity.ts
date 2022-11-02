import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { ReplyForPostEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'


@ObjectType()
@Entity('audio_f_reply_f_post_g')
export class Audio_F_Reply_F_Post_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPostEntity_G)
  @OneToOne(() => ReplyForPostEntity_G, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPostEntity_G
}
