import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { Post_G } from 'src/modules/posts/group/entities/posts-for-group.entity'

@ObjectType()
@Entity('image_f_post_g')
export class Image_F_Post_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => Post_G)
  @OneToOne(() => Post_G, (post) => post.image, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: Post_G
}
