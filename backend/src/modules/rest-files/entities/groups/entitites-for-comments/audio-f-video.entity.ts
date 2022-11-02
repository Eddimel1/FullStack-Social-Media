import { ObjectType, Field } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { CommentForVideoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-video_g.entity'
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('audio_f_comment_f_video_g')
export class Audio_F_Comment_F_Video_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideoEntity_G)
  @OneToOne(() => CommentForVideoEntity_G, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideoEntity_G
}
