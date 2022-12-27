import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForPost_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'

@ObjectType()
@Entity('image_f_comment_f_post')
export class Image_F_Comment_F_Post_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPost_U)
  @OneToOne(() => CommentForPost_U, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPost_U
}
