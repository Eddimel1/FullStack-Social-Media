import { Field, ObjectType } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForVideoEntity_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
import { Audio_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-video.entity'
import { Image_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-video.entity'
import { Video_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-video.entity'
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  TreeChildren,
  TreeParent,
  Entity,
  Tree,
} from 'typeorm'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity()
@Tree('closure-table', {
  closureTableName: 'replies_f_video_g',
  ancestorColumnName: (column) => 'ancestor_' + column.propertyName,
  descendantColumnName: (column) => 'descendant_' + column.propertyName,
})
export class ReplyForVideoEntity_G extends BaseCommentEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForVideoEntity_G, { nullable: true })
  @ManyToOne(() => CommentForVideoEntity_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideoEntity_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForVideoEntity_G, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

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
  image: Image_F_Reply_F_Video_G

  @Field(() => Video_F_Reply_F_Video_G)
  @OneToOne(() => Video_F_Reply_F_Video_G, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Video_G

  @Field(() => [ReplyForVideoEntity_G])
  @TreeChildren({ cascade: true })
  children: ReplyForVideoEntity_G[]

  @Field(() => ReplyForVideoEntity_G)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForVideoEntity_G
}
