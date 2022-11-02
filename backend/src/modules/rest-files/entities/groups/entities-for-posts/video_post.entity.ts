import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { PostEntity_G } from 'src/modules/posts-for-group/entities/posts-for-group.entity'

@ObjectType()
@Entity('video_f_post_g')
export class Video_F_Post_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_G)
  @OneToOne(() => PostEntity_G, (post) => post.video, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_G
}
