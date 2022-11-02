import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from '../../../../../BaseEntities/file-entities/imageBase'
import { CommentForPostEntity_G } from 'src/modules/comments-for-group/entities/comment-for-post_g.entity'

@ObjectType()
@Entity('image_f_comment_f_post_g')
export class Image_F_Comment_F_Post_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPostEntity_G)
  @OneToOne(() => CommentForPostEntity_G, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPostEntity_G
}
