import { Video_F_Comment_F_Post } from '../../rest-files/entities/entitites-for-comments/video-f-post'
import { Audio_F_Comment_F_Post } from '../../rest-files/entities/entitites-for-comments/audio-f-post.entity'
import { PostEntity } from 'src/modules/post/entities/post.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { Image_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/image-f-post.entity'

import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'

@ObjectType()
@Entity('comments_f_posts')
export class CommentForPostEntity extends BaseCommentEntity {
  @Column()
  postId: number
  @Field(() => PostEntity)
  @ManyToOne(() => PostEntity, (post) => post.comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: PostEntity

  @Column()
  @Field()
  text: string

  @Field(() => Audio_F_Comment_F_Post)
  @OneToOne(() => Audio_F_Comment_F_Post, (audio) => audio.comment, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Comment_F_Post

  @Field(() => Image_F_Comment_F_Post)
  @OneToOne(() => Image_F_Comment_F_Post, (image) => image.comment, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Comment_F_Post

  @Field(() => Video_F_Comment_F_Post)
  @OneToOne(() => Video_F_Comment_F_Post, (video) => video.comment, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Comment_F_Post
}
