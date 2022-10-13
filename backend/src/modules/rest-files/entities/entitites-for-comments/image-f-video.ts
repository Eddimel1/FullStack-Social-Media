import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForVideoEntity } from 'src/modules/comment/entities/comment-for-video.entity'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'

@ObjectType()
@Entity('image_f_comment_f_video')
export class Image_F_Comment_F_Video extends BaseImageEntity {
  @Column()
  commentId: number
  @Field(() => CommentForVideoEntity)
  @OneToOne(() => CommentForVideoEntity, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForVideoEntity
}
