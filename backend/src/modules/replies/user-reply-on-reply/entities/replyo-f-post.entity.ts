import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { Audio_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-post.entity'
import { Image_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-post.entity'
import { Video_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-post.entity'
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { ReplyForPostEntity_U } from '../../user-replies/entities/reply-f-post.entity'

@ObjectType()
@Entity('repliesO_f_post_u')
export class ReplyOForPostEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPostEntity_U)
  @ManyToOne(() => ReplyForPostEntity_U, (photo) => photo.repliesO, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPostEntity_U

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
  image: Image_F_Reply_F_Post_U

  @Field(() => Video_F_Reply_F_Post_U)
  @OneToOne(() => Video_F_Reply_F_Post_U, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Post_U
}
