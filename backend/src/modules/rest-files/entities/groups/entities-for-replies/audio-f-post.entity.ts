import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForPost_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'

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
