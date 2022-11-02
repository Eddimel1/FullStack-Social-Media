import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../user/entities/user.entity'
import { Audio_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/audio_post.entity'
import { Image_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/image_post.entity'
import { Video_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/video_post.entity'
import { CommentForPostEntity_U } from 'src/modules/comments-for-user/entities/comment-for-post.entity'

@ObjectType()
@Entity('posts_u')
export class PostEntity_U {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'ownerId' })
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => [CommentForPostEntity_U])
  @OneToMany(() => CommentForPostEntity_U, (comment) => comment.post, {
    onDelete: 'CASCADE',
    eager: true,
  })
  comments: CommentForPostEntity_U[]

  @Field(() => Video_F_Post_U)
  @OneToOne(() => Video_F_Post_U, (video) => video.post, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  video: Video_F_Post_U

  @Field(() => Image_F_Post_U)
  @OneToOne(() => Image_F_Post_U, (image) => image.post, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  image: Image_F_Post_U

  @Field(() => Audio_F_Post_U)
  @OneToOne(() => Audio_F_Post_U, (audio) => audio.post, {
    onDelete: 'CASCADE',
    nullable: true,
    eager: true,
  })
  audio: Audio_F_Post_U

  @Field()
  @Column({ default: 0 })
  likes: number

  @Field()
  @Column({ nullable: true })
  text: string

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date
}
