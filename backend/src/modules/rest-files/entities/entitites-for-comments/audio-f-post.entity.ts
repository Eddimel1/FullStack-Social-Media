import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { CommentForPostEntity } from 'src/modules/comment/entities/comment-for-post.entity'

@ObjectType()
@Entity('audio_f_comment_f_post')
export class Audio_F_Comment_F_Post extends BaseAudioEntity {
  @Column()
  commentId: number
  @Field(() => CommentForPostEntity)
  @OneToOne(() => CommentForPostEntity, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForPostEntity
}
