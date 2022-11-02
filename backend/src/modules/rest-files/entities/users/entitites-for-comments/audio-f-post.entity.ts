import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { CommentForPostEntity_U } from 'src/modules/comments-for-user/entities/comment-for-post.entity'


@ObjectType()
@Entity('audio_f_comment_f_post')
export class Audio_F_Comment_F_Post_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPostEntity_U)
  @OneToOne(() => CommentForPostEntity_U, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPostEntity_U
}
