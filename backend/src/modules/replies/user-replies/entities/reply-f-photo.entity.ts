import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { CommentForPhotoEntity_U } from 'src/modules/comments-for-user/entities/comment-for-photo.entity'
import { Audio_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-photo.entity'
import { Image_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-reply-f.entity'
import { Video_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-photo.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { ReplyOForPhotoEntity_U } from '../../user-reply-on-reply/entities/replyo-f-photo.entity'

@ObjectType()
@Entity('replies_f_galery_image_u')
export class ReplyForPhotoEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_U)
  @ManyToOne(() => CommentForPhotoEntity_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_U

  @Field(() => Audio_F_Reply_F_Photo_U)
  @OneToOne(() => Audio_F_Reply_F_Photo_U, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Photo_U

  @Field(() => Image_F_Reply_F_Photo_U)
  @OneToOne(() => Image_F_Reply_F_Photo_U, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_U

  @Field(() => Video_F_Reply_F_Photo_U)
  @OneToOne(() => Video_F_Reply_F_Photo_U, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Photo_U

  @Field(() => [ReplyOForPhotoEntity_U])
  @OneToMany(() => ReplyOForPhotoEntity_U, (photo) => photo.reply, {
    onDelete: 'CASCADE',
  })
  repliesO: ReplyOForPhotoEntity_U[]
}
