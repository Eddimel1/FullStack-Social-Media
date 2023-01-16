import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { CommentForPhoto_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'

@ObjectType()
@Entity('image_f_comment_f_photo_u')
export class Image_F_Comment_F_Photo_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhoto_U)
  @OneToOne(() => CommentForPhoto_U, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPhoto_U
}
