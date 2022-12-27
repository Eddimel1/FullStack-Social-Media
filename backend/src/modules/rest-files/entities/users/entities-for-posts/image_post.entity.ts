import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { Post_U } from 'src/modules/posts/user/entities/post.entity'

@ObjectType()
@Entity('image_f_post_u')
export class Image_F_Post_U extends BaseImageEntity {
  @Field()
  @Column()
  ownerId: number
  @Field(() => Post_U)
  @OneToOne(() => Post_U, (post) => post.image, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: Post_U
}
