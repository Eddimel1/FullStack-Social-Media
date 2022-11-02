import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { ReplyForVideoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { Audio_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-video.entity'
import { Video_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-video.entity'
import { Galery_Video_G } from 'src/modules/rest-files/entities/groups/galery-entities/video.entity'

import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'

@ObjectType()
@Entity('comments_f_galery_video_g')
export class CommentForVideoEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => Galery_Video_G)
  @ManyToOne(() => Galery_Video_G, (video) => video.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  commented_video: Galery_Video_G

  @Column()
  @Field()
  text: string

  @Field(() => Audio_F_Comment_F_Video_G)
  @OneToOne(() => Audio_F_Comment_F_Video_G, (audio) => audio.comment, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Comment_F_Video_G

  @Field(() => Image_F_Comment_F_Video_G)
  @OneToOne(() => Image_F_Comment_F_Video_G, (image) => image.comment, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Comment_F_Video_G

  @Field(() => Video_F_Comment_F_Video_G)
  @OneToOne(() => Video_F_Comment_F_Video_G, (video) => video.comment, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Comment_F_Video_G

  @Field(() => ReplyForVideoEntity_G)
  @OneToMany(() => ReplyForVideoEntity_G, (reply) => reply.comment, {
    onDelete: 'CASCADE',
  })
  replies: ReplyForVideoEntity_G
}
