import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { CommentForPhotoEntity_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'

@ObjectType()
@Entity('audio_f_comment_f_photo')
export class Audio_F_Comment_F_Photo_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_U)
  @OneToOne(() => CommentForPhotoEntity_U, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_U
}
