import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { Audio_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/audio_post.entity'
import { Image_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/image_post.entity'
import { Video_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/video_post.entity'
import { CommentForPost_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import { BasePostEntity } from 'src/typeOrm/baseEntities/base-post-entities/base-post'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('posts_u')
export class Post_U extends BasePostEntity {
  @Field()
  @Column({ name: 'ownerId' })
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.posts, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => [CommentForPost_U], { nullable: true })
  @OneToMany(() => CommentForPost_U, (comment) => comment.owner, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  comments: CommentForPost_U[]

  @Field(() => Video_F_Post_U, { nullable: true })
  @OneToOne(() => Video_F_Post_U, (video) => video.owner, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  video: Video_F_Post_U

  @Field(() => Image_F_Post_U, { nullable: true })
  @OneToOne(() => Image_F_Post_U, (image) => image.owner, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  image: Image_F_Post_U

  @Field(() => Audio_F_Post_U, { nullable: true })
  @OneToOne(() => Audio_F_Post_U, (audio) => audio.owner, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  audio: Audio_F_Post_U
}
