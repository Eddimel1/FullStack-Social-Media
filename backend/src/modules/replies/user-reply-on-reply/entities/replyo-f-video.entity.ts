import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { Audio_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-video.entity'
import { Video_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-video.entity'
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { ReplyForVideoEntity_U } from '../../user-replies/entities/reply-f-video.entity'

@ObjectType()
@Entity('repliesO_f_galery_video_u')
export class ReplyOForVideoEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideoEntity_U)
  @ManyToOne(() => ReplyForVideoEntity_U, (photo) => photo.repliesO, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForVideoEntity_U

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
  image: Image_F_Reply_F_Video_U

  @Field(() => Video_F_Reply_F_Video_U)
  @OneToOne(() => Video_F_Reply_F_Video_U, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Video_U
}
