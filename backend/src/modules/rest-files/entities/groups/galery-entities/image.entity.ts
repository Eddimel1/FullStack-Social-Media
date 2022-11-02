import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { CommentForPhotoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-photo_g.entity'

@ObjectType()
@Entity('galery_images_g')
export class Galery_Image_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => GroupEntity)
  @ManyToOne(() => GroupEntity, (group) => group.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: GroupEntity

  @Field(() => CommentForPhotoEntity_G)
  @ManyToOne(
    () => CommentForPhotoEntity_G,
    (comment) => comment.commented_photo,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  comments: CommentForPhotoEntity_G[]
}
