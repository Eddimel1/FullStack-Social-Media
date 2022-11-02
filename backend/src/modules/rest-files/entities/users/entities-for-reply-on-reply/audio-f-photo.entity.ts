import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { CommentForPhotoEntity_U } from 'src/modules/comments-for-user/entities/comment-for-photo.entity'

@ObjectType()
@Entity('audio_f_replyo_f_photo_u')
export class Audio_F_Comment_F_Photo_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_U)
  @OneToOne(() => CommentForPhotoEntity_U, (replyo) => replyo.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: CommentForPhotoEntity_U
}
