import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { CommentForPhoto_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'

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

  @Field(() => CommentForPhoto_G)
  @ManyToOne(() => CommentForPhoto_G, (comment) => comment.owner, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  comments: CommentForPhoto_G[]
}
