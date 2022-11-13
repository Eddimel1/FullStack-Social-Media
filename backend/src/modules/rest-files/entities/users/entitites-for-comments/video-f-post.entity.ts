import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForPostEntity_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('video_f_comment_f_post')
export class Video_F_Comment_F_Post_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPostEntity_U)
  @OneToOne(() => CommentForPostEntity_U, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPostEntity_U
}
