import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { CommentForPostEntity_U } from 'src/modules/comments-for-user/entities/comment-for-post.entity'
import { Audio_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-post.entity'
import { Image_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-post.entity'
import { Image_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-reply-f.entity'
import { Video_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-photo.entity'
import { Video_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-post.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { ReplyOForPostEntity_U } from '../../user-reply-on-reply/entities/replyo-f-post.entity'

@ObjectType()
@Entity('replies_f_post_u')
export class ReplyForPostEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPostEntity_U)
  @ManyToOne(() => CommentForPostEntity_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPostEntity_U

  @Field(() => Audio_F_Reply_F_Post_U)
  @OneToOne(() => Audio_F_Reply_F_Post_U, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Post_U

  @Field(() => Image_F_Reply_F_Post_U)
  @OneToOne(() => Image_F_Reply_F_Post_U, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_U

  @Field(() => Video_F_Reply_F_Photo_U)
  @OneToOne(() => Video_F_Reply_F_Photo_U, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Post_U

  @Field(() => [ReplyOForPostEntity_U])
  @OneToMany(() => ReplyOForPostEntity_U, (photo) => photo.reply, {
    onDelete: 'CASCADE',
  })
  repliesO: ReplyOForPostEntity_U[]
}
