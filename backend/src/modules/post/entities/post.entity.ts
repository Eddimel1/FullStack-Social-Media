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

import { AudioPostEntity } from 'src/modules/rest-files/entities/entities-for-posts/audio_post.entity'
import { ImagePostEntity } from 'src/modules/rest-files/entities/entities-for-posts/image_post.entity'
import { VideoPostEntity } from 'src/modules/rest-files/entities/entities-for-posts/video_post.entity'
import { CommentForPostEntity } from 'src/modules/comment/entities/comment-for-post.entity'


@ObjectType()
@Entity('posts')
export class PostEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'ownerId' })
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => [CommentForPostEntity])
  @OneToMany(() => CommentForPostEntity, (comment) => comment.post, {
    onDelete: 'CASCADE',
  })
  comments: CommentForPostEntity[]

  @Field(() => VideoPostEntity)
  @OneToOne(() => VideoPostEntity, (video) => video.post, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  video: VideoPostEntity

  @Field(() => ImagePostEntity)
  @OneToOne(() => ImagePostEntity, (image) => image.post, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  image: ImagePostEntity

  @Field(() => AudioPostEntity)
  @OneToOne(() => AudioPostEntity, (audio) => audio.post, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  audio: AudioPostEntity

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
