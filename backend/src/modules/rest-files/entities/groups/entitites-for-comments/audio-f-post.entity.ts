import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { CommentForPostEntity_G } from 'src/modules/comments-for-group/entities/comment-for-post_g.entity'

@ObjectType()
@Entity('audio_f_comment_f_post_g')
export class Audio_F_Comment_F_Post_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPostEntity_G)
  @OneToOne(() => CommentForPostEntity_G, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPostEntity_G
}
