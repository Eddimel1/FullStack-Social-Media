import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForPost_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('video_f_comment_f_post_g')
export class Video_F_Comment_F_Post_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPost_G)
  @OneToOne(() => CommentForPost_G, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPost_G
}
