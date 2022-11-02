import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../../../user/entities/user.entity'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { CommentForPhotoEntity_U } from 'src/modules/comments-for-user/entities/comment-for-photo.entity'

@ObjectType()
@Entity('galery_images_u')
export class Galery_Image_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.images, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => CommentForPhotoEntity_U)
  @ManyToOne(
    () => CommentForPhotoEntity_U,
    (comment) => comment.commented_photo,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  comments: CommentForPhotoEntity_U[]
}
