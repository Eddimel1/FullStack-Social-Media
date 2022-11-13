import { Video_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/video_post.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { CommentForPostEntity_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'

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
import { BasePostEntity } from 'src/typeOrm/baseEntities/base-post-entities/base-post'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('posts_g')
export class PostEntity_G extends BasePostEntity {
  @Column({ name: 'ownerId' })
  ownerId: number
  @Field(() => GroupEntity)
  @ManyToOne(() => GroupEntity, (group) => group.posts, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'ownerId' })
  owner: GroupEntity

  @Column({ name: 'userId' })
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.group_posts, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

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
}
