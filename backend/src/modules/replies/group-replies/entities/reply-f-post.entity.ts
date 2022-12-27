import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForPost_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'
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
export class ReplyForPost_G extends BaseCommentEntity {
  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForPost_G, { nullable: true })
  @ManyToOne(() => CommentForPost_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPost_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForPostEntity_G, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Post_G)
  @OneToOne(() => Audio_F_Reply_F_Post_G, (audio) => audio.owner, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Reply_F_Post_G

  @Field(() => Image_F_Reply_F_Post_G)
  @OneToOne(() => Image_F_Reply_F_Post_G, (image) => image.owner, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Post_G

  @Field(() => Video_F_Reply_F_Post_G)
  @OneToOne(() => Video_F_Reply_F_Post_G, (video) => video.owner, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Post_G

  @Field(() => [ReplyForPost_G])
  @TreeChildren()
  children: ReplyForPost_G[]

  @Field(() => ReplyForPost_G)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForPost_G
}
