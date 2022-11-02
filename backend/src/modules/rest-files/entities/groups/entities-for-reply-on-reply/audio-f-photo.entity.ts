import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { CommentForPhotoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-photo_g.entity'

@ObjectType()
@Entity('audio_f_replyo_f_photo_g')
export class Audio_F_ReplyO_F_Photo_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_G)
  @OneToOne(() => CommentForPhotoEntity_G, (replyo) => replyo.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: CommentForPhotoEntity_G
}
