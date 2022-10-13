import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForVideoEntity } from 'src/modules/comment/entities/comment-for-video.entity'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'

@ObjectType()
@Entity('audio_f_comment_f_video')
export class Audio_F_Comment_F_Video extends BaseAudioEntity {
  @Column()
  commentId: number
  @Field(() => CommentForVideoEntity)
  @OneToOne(() => CommentForVideoEntity, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForVideoEntity
}
