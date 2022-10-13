import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForPhotoEntity } from 'src/modules/comment/entities/comment-for-photo.entity'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'

@ObjectType()
@Entity('audio_f_comment_f_photo')
export class Audio_F_Comment_F_Photo extends BaseAudioEntity {
  @Column()
  commentId: number
  @Field(() => CommentForPhotoEntity)
  @OneToOne(() => CommentForPhotoEntity, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForPhotoEntity
}
