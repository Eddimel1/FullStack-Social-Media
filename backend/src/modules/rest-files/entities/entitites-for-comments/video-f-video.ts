import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { CommentForVideoEntity } from 'src/modules/comment/entities/comment-for-video.entity'


@ObjectType()
@Entity('video_f_comment_f_video')
export class Video_F_Comment_F_Video extends BaseVideoEntity {
  @Column()
  commentId: number
  @Field(() => CommentForVideoEntity)
  @OneToOne(() => CommentForVideoEntity, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForVideoEntity
}
