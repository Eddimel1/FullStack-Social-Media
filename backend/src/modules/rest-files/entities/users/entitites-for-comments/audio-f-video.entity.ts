import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { CommentForVideo_U } from 'src/modules/comments/user/entities/comment-for-video.entity'

@ObjectType()
@Entity('audio_f_comment_f_video_u')
export class Audio_F_Comment_F_Video_U extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideo_U)
  @OneToOne(() => CommentForVideo_U, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForVideo_U
}
