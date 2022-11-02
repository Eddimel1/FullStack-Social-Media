import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { CommentForVideoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-video_g.entity'
import { Audio_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-reply-f.entity'
import { Image_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-video.entity'
import { Video_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-photo.entity'
import { Video_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-video.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { ReplyOForVideoEntity_G } from '../../group-reply-on-reply/entities/replyo-f-video.entity'

@ObjectType()
@Entity('replies_f_galery_video_g')
export class ReplyForVideoEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideoEntity_G)
  @ManyToOne(() => CommentForVideoEntity_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideoEntity_G

  @Field(() => Audio_F_Reply_F_Video_G)
  @OneToOne(() => Audio_F_Reply_F_Video_G, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Video_G

  @Field(() => Image_F_Reply_F_Video_G)
  @OneToOne(() => Image_F_Reply_F_Video_G, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_G

  @Field(() => Video_F_Reply_F_Photo_G)
  @OneToOne(() => Video_F_Reply_F_Photo_G, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Video_G

  @Field(() => [ReplyOForVideoEntity_G])
  @OneToMany(() => ReplyOForVideoEntity_G, (photo) => photo.reply, {
    onDelete: 'CASCADE',
  })
  repliesO: ReplyOForVideoEntity_G[]
}
