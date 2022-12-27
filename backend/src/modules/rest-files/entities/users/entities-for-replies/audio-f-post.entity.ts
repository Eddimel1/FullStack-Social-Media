import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { ReplyForPost_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'

@ObjectType()
@Entity('audio_f_reply_f_post_u')
export class Audio_F_Reply_F_Post_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPost_U)
  @OneToOne(() => ReplyForPost_U, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForPost_U
}
