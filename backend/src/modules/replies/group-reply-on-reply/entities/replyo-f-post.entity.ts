import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { Audio_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-post.entity'
import { Image_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-post.entity'
import { Video_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-post.entity'
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { ReplyForPostEntity_G } from '../../group-replies/entities/reply-f-post.entity'

@ObjectType()
@Entity('repliesO_f_post_g')
export class ReplyOForPostEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPostEntity_G)
  @ManyToOne(() => ReplyForPostEntity_G, (photo) => photo.repliesO, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPostEntity_G

  @Field(() => Audio_F_Reply_F_Post_G)
  @OneToOne(() => Audio_F_Reply_F_Post_G, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Post_G

  @Field(() => Image_F_Reply_F_Post_G)
  @OneToOne(() => Image_F_Reply_F_Post_G, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Post_G

  @Field(() => Video_F_Reply_F_Post_G)
  @OneToOne(() => Video_F_Reply_F_Post_G, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Post_G
}
