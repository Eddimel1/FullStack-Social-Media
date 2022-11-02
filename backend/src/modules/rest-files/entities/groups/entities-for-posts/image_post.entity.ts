import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { PostEntity_G } from 'src/modules/posts-for-group/entities/posts-for-group.entity'


@ObjectType()
@Entity('image_f_post_g')
export class Image_F_Post_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_G)
  @OneToOne(() => PostEntity_G, (post) => post.image, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_G
}
