import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from '../../../../../BaseEntities/file-entities/videoBase'
import { CommentForPhotoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-photo_g.entity'
import { CommentForPostEntity_G } from 'src/modules/comments-for-group/entities/comment-for-post_g.entity'

@ObjectType()
@Entity('video_f_comment_f_post_g')
export class Video_F_Comment_F_Post_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPostEntity_G)
  @OneToOne(() => CommentForPostEntity_G, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_G
}
