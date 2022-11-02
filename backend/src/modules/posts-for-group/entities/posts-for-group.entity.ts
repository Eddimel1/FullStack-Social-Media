import { GroupEntity } from './../../groups/modules/groups/entities/group.entity';
import { Video_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/video_post.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'
import { CommentForPostEntity_G } from 'src/modules/comments-for-group/entities/comment-for-post_g.entity'


import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { Audio_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/audio_post.entity'
import { Image_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/image_post.entity'

@ObjectType()
@Entity('posts_g')
export class PostEntity_G extends BasicEntity {
  @Column({ name: 'ownerId' })
  ownerId: number
  @Field(() => GroupEntity)
  @ManyToOne(() => GroupEntity, (group) => group.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: GroupEntity

  @Field(() => [CommentForPostEntity_G])
  @OneToMany(() => CommentForPostEntity_G, (comment) => comment.post, {
    onDelete: 'CASCADE',
    eager: true,
  })
  comments: CommentForPostEntity_G[]

  @Field(() => Video_F_Post_G)
  @OneToOne(() => Video_F_Post_G, (video) => video.post, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  video: Video_F_Post_G

  @Field(() => Image_F_Post_G)
  @OneToOne(() => Image_F_Post_G, (image) => image.post, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  image: Image_F_Post_G

  @Field(() => Audio_F_Post_G)
  @OneToOne(() => Audio_F_Post_G, (audio) => audio.post, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  audio: Audio_F_Post_G

  @Field()
  @Column({ default: 0 })
  likes: number

  @Field()
  @Column({ nullable: true })
  text: string
}
