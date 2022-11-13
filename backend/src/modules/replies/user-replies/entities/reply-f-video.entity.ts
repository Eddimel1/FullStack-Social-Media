import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForVideoEntity_U } from 'src/modules/comments/user/entities/comment-for-video.entity'
import { Audio_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-video.entity'
import { Video_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-video.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity()
@Tree('closure-table', {
  closureTableName: 'replies_f_video_u',
  ancestorColumnName: (column) => 'ancestor_' + column.propertyName,
  descendantColumnName: (column) => 'descendant_' + column.propertyName,
})
export class ReplyForVideoEntity_U extends BaseCommentEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForVideoEntity_U, { nullable: true })
  @ManyToOne(() => CommentForVideoEntity_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideoEntity_U

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForVideoEntity_U, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

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

  @Field(() => [ReplyForVideoEntity_U])
  @TreeChildren({ cascade: true })
  children: ReplyForVideoEntity_U[]

  @Field(() => ReplyForVideoEntity_U)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForVideoEntity_U
}
