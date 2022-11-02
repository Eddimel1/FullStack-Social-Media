import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { CommentForPhotoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-photo_g.entity'

@ObjectType()
@Entity('image_f_comment_f_photo_g')
export class Image_F_Comment_F_Photo_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_G)
  @OneToOne(() => CommentForPhotoEntity_G, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_G
}
