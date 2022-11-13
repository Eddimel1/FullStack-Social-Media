import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { ReplyForPostEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'
import { Audio_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-post.entity'
import { Image_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-post.entity'
import { Video_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-post.entity'

import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { PostEntity_G } from 'src/modules/posts/group/entities/posts-for-group.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('comments_f_post_g')
export class CommentForPostEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_G)
  @ManyToOne(() => PostEntity_G, (post) => post.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (comment) => comment.commentForPostEntity_G, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Comment_F_Post_G)
  @OneToOne(() => Audio_F_Comment_F_Post_G, (audio) => audio.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  audio: Audio_F_Comment_F_Post_G

  @Field(() => Image_F_Comment_F_Post_G)
  @OneToOne(() => Image_F_Comment_F_Post_G, (image) => image.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  image: Image_F_Comment_F_Post_G

  @Field(() => Video_F_Comment_F_Post_G)
  @OneToOne(() => Video_F_Comment_F_Post_G, (video) => video.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  video: Video_F_Comment_F_Post_G

  @Field(() => ReplyForPostEntity_G)
  @OneToMany(() => ReplyForPostEntity_G, (reply) => reply.comment, {
    onDelete: 'CASCADE',
  })
  replies: ReplyForPostEntity_G
}
