import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { ReplyForPost_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
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
import { Post_U } from 'src/modules/posts/user/entities/post.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('comments_f_post_u')
export class CommentForPost_U extends BaseCommentEntity {
  @Field()
  @Column()
  ownerId: number
  @Field(() => Post_U)
  @ManyToOne(() => Post_U, (post) => post.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: Post_U

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (comment) => comment.commentForPostEntity_U, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Comment_F_Post_U, { nullable: true })
  @OneToOne(() => Audio_F_Comment_F_Post_U, (audio) => audio.owner, {
    onDelete: 'CASCADE',
    eager: true,
    nullable: true,
  })
  audio: Audio_F_Comment_F_Post_U

  @Field(() => Image_F_Comment_F_Post_U, { nullable: true })
  @OneToOne(() => Image_F_Comment_F_Post_U, (image) => image.owner, {
    onDelete: 'CASCADE',
    eager: true,
    nullable: true,
  })
  image: Image_F_Comment_F_Post_U

  @Field(() => Video_F_Comment_F_Post_U, { nullable: true })
  @OneToOne(() => Video_F_Comment_F_Post_U, (video) => video.owner, {
    onDelete: 'CASCADE',
    eager: true,
    nullable: true,
  })
  video: Video_F_Comment_F_Post_U

  @Field(() => ReplyForPost_U, { nullable: true })
  @OneToMany(() => ReplyForPost_U, (reply) => reply.comment, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  replies: ReplyForPost_U
}
