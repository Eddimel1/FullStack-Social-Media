import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForPostEntity_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'
import { Audio_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-post.entity'
import { Image_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-post.entity'
import { Video_F_Reply_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-post.entity'
import {
  Entity,
  Tree,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  TreeChildren,
  TreeParent,
} from 'typeorm'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity()
@Tree('closure-table', {
  closureTableName: 'replies_f_post_g',
  ancestorColumnName: (column) => 'ancestor_' + column.propertyName,
  descendantColumnName: (column) => 'descendant_' + column.propertyName,
})
export class ReplyForPostEntity_G extends BaseCommentEntity {
  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForPostEntity_G, { nullable: true })
  @ManyToOne(() => CommentForPostEntity_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPostEntity_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForPostEntity_G, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Post_G)
  @OneToOne(() => Audio_F_Reply_F_Post_G, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
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

  @Field(() => [ReplyForPostEntity_G])
  @TreeChildren()
  children: ReplyForPostEntity_G[]

  @Field(() => ReplyForPostEntity_G)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForPostEntity_G
}
