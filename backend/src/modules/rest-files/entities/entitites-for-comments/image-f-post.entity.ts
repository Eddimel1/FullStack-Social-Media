import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from '../../../../BaseEntities/file-entities/imageBase'
import { CommentForPostEntity } from 'src/modules/comment/entities/comment-for-post.entity'

@ObjectType()
@Entity('image_f_comment_f_post')
export class Image_F_Comment_F_Post extends BaseImageEntity {
  @Column()
  commentId: number
  @Field(() => CommentForPostEntity)
  @OneToOne(() => CommentForPostEntity, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForPostEntity
}


