import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { ReplyOForPostEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-post.entity'


@ObjectType()
@Entity('audio_f_replyo_f_post_g')
export class Audio_F_ReplyO_F_Post_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPostEntity_G)
  @OneToOne(() => ReplyOForPostEntity_G, (replyo) => replyo.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPostEntity_G
}
