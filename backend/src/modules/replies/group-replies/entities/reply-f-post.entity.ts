import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { CommentForPostEntity_G } from 'src/modules/comments-for-group/entities/comment-for-post_g.entity'
import { Audio_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-post.entity'
import { Image_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-post.entity'
import { Image_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-reply-f.entity'
import { Video_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-photo.entity'
import { Video_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-post.entity'
import { Entity, Column, ManyToOne, JoinColumn, OneToOne, OneToMany } from 'typeorm'
import { ReplyOForPostEntity_G } from '../../group-reply-on-reply/entities/replyo-f-post.entity'

@ObjectType()
@Entity('replies_f_post_g')
export class ReplyForPostEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPostEntity_G)
  @ManyToOne(() => CommentForPostEntity_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPostEntity_G

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
  image: Image_F_Reply_F_Photo_G

  @Field(() => Video_F_Reply_F_Photo_G)
  @OneToOne(() => Video_F_Reply_F_Photo_G, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Post_G

  @Field(() => [ReplyOForPostEntity_G])
  @OneToMany(() => ReplyOForPostEntity_G, (photo) => photo.reply, {
    onDelete: 'CASCADE',
  })
  repliesO: ReplyOForPostEntity_G[]
}
