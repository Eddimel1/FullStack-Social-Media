import { ObjectType, Field, Int } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { CommentForPhotoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-photo_g.entity'
import { Audio_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-photo.entity'
import { Image_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-reply-f.entity'
import { Video_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-photo.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { ReplyOForPhotoEntity_G } from '../../group-reply-on-reply/entities/replyo-f-photo.entity'

@ObjectType()
@Entity('replies_f_galery_image_g')
export class ReplyForPhotoEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_G)
  @ManyToOne(() => CommentForPhotoEntity_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_G

  @Field(() => Audio_F_Reply_F_Photo_G)
  @OneToOne(() => Audio_F_Reply_F_Photo_G, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Photo_G

  @Field(() => Image_F_Reply_F_Photo_G)
  @OneToOne(() => Image_F_Reply_F_Photo_G, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_G

  @Field(() => Video_F_Reply_F_Photo_G)
  @OneToOne(() => Video_F_Reply_F_Photo_G, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Photo_G

  @Field(() => [ReplyOForPhotoEntity_G])
  @OneToMany(() => ReplyOForPhotoEntity_G, (photo) => photo.reply, {
    onDelete: 'CASCADE',
  })
  repliesO: ReplyOForPhotoEntity_G[]
}
