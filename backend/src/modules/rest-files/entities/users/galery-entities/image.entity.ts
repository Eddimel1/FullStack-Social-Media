import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { CommentForPhoto_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('galery_images_u')
export class Galery_Image_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.images, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => CommentForPhoto_U)
  @ManyToOne(() => CommentForPhoto_U, (comment) => comment.owner, {
    onDelete: 'CASCADE',
  })
  comments: CommentForPhoto_U[]
}
