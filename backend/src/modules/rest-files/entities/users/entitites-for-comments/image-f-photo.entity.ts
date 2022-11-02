import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { CommentForPhotoEntity_U } from 'src/modules/comments-for-user/entities/comment-for-photo.entity'

@ObjectType()
@Entity('image_f_comment_f_photo')
export class Image_F_Comment_F_Photo_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_U)
  @OneToOne(() => CommentForPhotoEntity_U, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_U
}
