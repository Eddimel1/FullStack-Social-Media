import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { PostEntity_U } from 'src/modules/posts-for-user/entities/post.entity'

import { ReplyForPostEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'

import { Audio_F_Comment_F_Post_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/audio-f-post.entity'
import { Image_F_Comment_F_Post_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-post.entity'
import { Video_F_Comment_F_Post_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-post.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'

@ObjectType()
@Entity('comments_f_post_u')
export class CommentForPostEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_U)
  @ManyToOne(() => PostEntity_U, (post) => post.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_U

  @Column()
  @Field()
  text: string

  @Field(() => Audio_F_Comment_F_Post_U)
  @OneToOne(() => Audio_F_Comment_F_Post_U, (audio) => audio.comment, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Comment_F_Post_U

  @Field(() => Image_F_Comment_F_Post_U)
  @OneToOne(() => Image_F_Comment_F_Post_U, (image) => image.comment, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Comment_F_Post_U

  @Field(() => Video_F_Comment_F_Post_U)
  @OneToOne(() => Video_F_Comment_F_Post_U, (video) => video.comment, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Comment_F_Post_U

  @Field(() => ReplyForPostEntity_U)
  @OneToMany(() => ReplyForPostEntity_U, (reply) => reply.comment, {
    onDelete: 'CASCADE',
  })
  replies: ReplyForPostEntity_U
}
