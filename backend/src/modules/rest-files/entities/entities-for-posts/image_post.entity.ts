import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { PostEntity } from 'src/modules/post/entities/post.entity'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'

@ObjectType()
@Entity('post_images')
export class ImagePostEntity extends BaseImageEntity {
  @Column()
  postId: number
  @Field(() => PostEntity)
  @OneToOne(() => PostEntity, (post) => post.image, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: PostEntity
}
