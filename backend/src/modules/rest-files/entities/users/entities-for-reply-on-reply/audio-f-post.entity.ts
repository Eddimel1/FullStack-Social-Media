import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { ReplyOForPostEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-post.entity'


@ObjectType()
@Entity('audio_f_replyo_f_post_u')
export class Audio_F_ReplyO_F_Post_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPostEntity_U)
  @OneToOne(() => ReplyOForPostEntity_U, (replyo) => replyo.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPostEntity_U
}
