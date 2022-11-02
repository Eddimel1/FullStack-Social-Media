import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { PostEntity_U } from 'src/modules/posts-for-user/entities/post.entity'


@ObjectType()
@Entity('image_f_post_u')
export class Image_F_Post_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_U)
  @OneToOne(() => PostEntity_U, (post) => post.image, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_U
}
