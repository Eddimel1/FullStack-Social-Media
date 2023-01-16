import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForPost_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('video_f_comment_f_post_u')
export class Video_F_Comment_F_Post_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPost_U)
  @OneToOne(() => CommentForPost_U, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPost_U
}
