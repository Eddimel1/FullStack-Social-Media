import { ObjectType, Field } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'

@ObjectType()
@Entity('audio_f_comment_f_video_g')
export class Audio_F_Comment_F_Video_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideo_G)
  @OneToOne(() => CommentForVideo_G, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForVideo_G
}
