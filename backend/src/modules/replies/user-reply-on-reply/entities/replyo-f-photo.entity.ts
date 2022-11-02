import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { Audio_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-photo.entity'
import { Image_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-reply-f.entity'
import { Video_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-photo.entity'
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { ReplyForPhotoEntity_U } from '../../user-replies/entities/reply-f-photo.entity'

@ObjectType()
@Entity('repliesO_f_galery_image_u')
export class ReplyOForPhotoEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhotoEntity_U)
  @ManyToOne(() => ReplyForPhotoEntity_U, (photo) => photo.repliesO, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_U

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
}
