import { Field, ObjectType } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
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
export class ReplyForVideo_G extends BaseCommentEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForVideo_G, { nullable: true })
  @ManyToOne(() => CommentForVideo_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideo_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForVideoEntity_G, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Video_G)
  @OneToOne(() => Audio_F_Reply_F_Video_G, (audio) => audio.owner, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Video_G

  @Field(() => Image_F_Reply_F_Video_G)
  @OneToOne(() => Image_F_Reply_F_Video_G, (image) => image.owner, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Video_G

  @Field(() => Video_F_Reply_F_Video_G)
  @OneToOne(() => Video_F_Reply_F_Video_G, (video) => video.owner, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Video_G

  @Field(() => [ReplyForVideo_G])
  @TreeChildren({ cascade: true })
  children: ReplyForVideo_G[]

  @Field(() => ReplyForVideo_G)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForVideo_G
}
