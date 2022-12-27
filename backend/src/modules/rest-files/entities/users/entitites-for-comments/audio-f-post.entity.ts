import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { CommentForPost_U } from 'src/modules/comments/user/entities/comment-for-post.entity'

@ObjectType()
@Entity('audio_f_comment_f_post')
export class Audio_F_Comment_F_Post_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPost_U)
  @OneToOne(() => CommentForPost_U, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPost_U
}
