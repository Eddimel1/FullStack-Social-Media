import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForVideo_U } from 'src/modules/comments/user/entities/comment-for-video.entity'
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
export class ReplyForVideo_U extends BaseCommentEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForVideo_U, { nullable: true })
  @ManyToOne(() => CommentForVideo_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideo_U

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForVideoEntity_U, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Video_U)
  @OneToOne(() => Audio_F_Reply_F_Video_U, (audio) => audio.owner, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Reply_F_Video_U

  @Field(() => Image_F_Reply_F_Video_U)
  @OneToOne(() => Image_F_Reply_F_Video_U, (image) => image.owner, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Video_U

  @Field(() => Video_F_Reply_F_Video_U)
  @OneToOne(() => Video_F_Reply_F_Video_U, (video) => video.owner, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Video_U

  @Field(() => [ReplyForVideo_U], { nullable: true, defaultValue: [] })
  @TreeChildren({ cascade: true })
  children: ReplyForVideo_U[]

  @Field(() => ReplyForVideo_U, { defaultValue: [] })
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForVideo_U
}
