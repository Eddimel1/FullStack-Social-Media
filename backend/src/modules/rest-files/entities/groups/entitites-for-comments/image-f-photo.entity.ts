import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { CommentForPhoto_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'

@ObjectType()
@Entity('image_f_comment_f_photo_g')
export class Image_F_Comment_F_Photo_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhoto_G)
  @OneToOne(() => CommentForPhoto_G, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPhoto_G
}
