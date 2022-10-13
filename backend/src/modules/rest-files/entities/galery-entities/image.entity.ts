import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../../user/entities/user.entity'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { CommentForPhotoEntity } from 'src/modules/comment/entities/comment-for-photo.entity'


@ObjectType()
@Entity('images')
export class ImageEntity extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.images, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => CommentForPhotoEntity)
  @ManyToOne(
    () => CommentForPhotoEntity,
    (comment) => comment.commented_photo,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  comments: CommentForPhotoEntity[]
}
