import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from '../../../../BaseEntities/file-entities/videoBase'
import { CommentForPhotoEntity } from 'src/modules/comment/entities/comment-for-photo.entity'
import { CommentForPostEntity } from 'src/modules/comment/entities/comment-for-post.entity'

@ObjectType()
@Entity('video_f_comment_f_post')
export class Video_F_Comment_F_Post extends BaseVideoEntity {
  @Column()
  commentId: number
  @Field(() => CommentForPostEntity)
  @OneToOne(() => CommentForPostEntity, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForPhotoEntity
}
