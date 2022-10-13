import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { CommentForPhotoEntity } from 'src/modules/comment/entities/comment-for-photo.entity'

@ObjectType()
@Entity('image_f_comment_f_photo')
export class Image_F_Comment_F_Photo extends BaseImageEntity {
  @Column()
  commentId: number
  @Field(() => CommentForPhotoEntity)
  @OneToOne(() => CommentForPhotoEntity, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForPhotoEntity
}


