import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForPost_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import { Audio_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-post.entity'
import { Image_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-post.entity'
import { Video_F_Reply_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-post.entity'
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
  closureTableName: 'replies_f_post_u',
  ancestorColumnName: (column) => 'ancestor_' + column.propertyName,
  descendantColumnName: (column) => 'descendant_' + column.propertyName,
})
export class ReplyForPost_U extends BaseCommentEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForPost_U, { nullable: true })
  @ManyToOne(() => CommentForPost_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPost_U

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForPostEntity_U, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Post_U)
  @OneToOne(() => Audio_F_Reply_F_Post_U, (audio) => audio.owner, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Post_U

  @Field(() => Image_F_Reply_F_Post_U)
  @OneToOne(() => Image_F_Reply_F_Post_U, (image) => image.owner, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Post_U

  @Field(() => Video_F_Reply_F_Post_U)
  @OneToOne(() => Video_F_Reply_F_Post_U, (video) => video.owner, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Post_U

  @Field(() => [ReplyForPost_U])
  @TreeChildren({ cascade: true })
  children: ReplyForPost_U[]

  @Field(() => ReplyForPost_U)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForPost_U
}
