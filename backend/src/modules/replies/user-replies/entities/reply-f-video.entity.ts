import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { CommentForVideoEntity_U } from 'src/modules/comments-for-user/entities/comment-for-video.entity'


import { Audio_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-reply-f.entity'
import { Image_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-video.entity'
import { Video_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-photo.entity'
import { Video_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-video.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { ReplyOForVideoEntity_U } from '../../user-reply-on-reply/entities/replyo-f-video.entity'

@ObjectType()
@Entity('replies_f_galery_video_u')
export class ReplyForVideoEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideoEntity_U)
  @ManyToOne(() => CommentForVideoEntity_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideoEntity_U

  @Field(() => Audio_F_Reply_F_Video_U)
  @OneToOne(() => Audio_F_Reply_F_Video_U, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Video_U

  @Field(() => Image_F_Reply_F_Video_U)
  @OneToOne(() => Image_F_Reply_F_Video_U, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_U

  @Field(() => Video_F_Reply_F_Photo_U)
  @OneToOne(() => Video_F_Reply_F_Photo_U, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Video_U

  @Field(() => [ReplyOForVideoEntity_U])
  @OneToMany(() => ReplyOForVideoEntity_U, (photo) => photo.reply, {
    onDelete: 'CASCADE',
  })
  repliesO: ReplyOForVideoEntity_U[]
}
