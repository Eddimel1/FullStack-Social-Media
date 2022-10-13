import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { PostEntity } from 'src/modules/post/entities/post.entity'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'

@ObjectType()
@Entity('post_videos')
export class VideoPostEntity extends BaseVideoEntity {
  @Column()
  postId: number
  @Field(() => PostEntity)
  @OneToOne(() => PostEntity, (post) => post.video, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: PostEntity
}
