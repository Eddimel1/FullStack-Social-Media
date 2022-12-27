import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForPost_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'

@ObjectType()
@Entity('image_f_comment_f_post_g')
export class Image_F_Comment_F_Post_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPost_G)
  @OneToOne(() => CommentForPost_G, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPost_G
}
