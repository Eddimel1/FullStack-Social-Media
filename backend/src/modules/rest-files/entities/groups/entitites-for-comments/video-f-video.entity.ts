import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { CommentForVideoEntity_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'

@ObjectType()
@Entity('video_f_comment_f_video_g')
export class Video_F_Comment_F_Video_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideoEntity_G)
  @OneToOne(() => CommentForVideoEntity_G, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideoEntity_G
}
