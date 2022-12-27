import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { CommentForVideo_U } from 'src/modules/comments/user/entities/comment-for-video.entity'

@ObjectType()
@Entity('video_f_comment_f_video')
export class Video_F_Comment_F_Video_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideo_U)
  @OneToOne(() => CommentForVideo_U, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForVideo_U
}
