import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForPhoto_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'
import { Audio_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-photo.entity'
import { Image_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-reply-f.entity'
import { Video_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-photo.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity()
@Tree('closure-table', {
  closureTableName: 'replies_f_photo_g',
  ancestorColumnName: (column) => 'ancestor_' + column.propertyName,
  descendantColumnName: (column) => 'descendant_' + column.propertyName,
})
export class ReplyForPhoto_G extends BaseCommentEntity {
  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForPhoto_G, { nullable: true })
  @ManyToOne(() => CommentForPhoto_G, (photo) => photo.replies, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhoto_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForPhotoEntity_G, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Photo_G)
  @OneToOne(() => Audio_F_Reply_F_Photo_G, (audio) => audio.owner, {
    onDelete: 'CASCADE',
    eager: true,
  })
  audio: Audio_F_Reply_F_Photo_G

  @Field(() => Image_F_Reply_F_Photo_G)
  @OneToOne(() => Image_F_Reply_F_Photo_G, (image) => image.owner, {
    onDelete: 'CASCADE',
    eager: true,
  })
  image: Image_F_Reply_F_Photo_G

  @Field(() => Video_F_Reply_F_Photo_G)
  @OneToOne(() => Video_F_Reply_F_Photo_G, (video) => video.owner, {
    onDelete: 'CASCADE',
    eager: true,
  })
  video: Video_F_Reply_F_Photo_G

  @Field(() => [ReplyForPhoto_G])
  @TreeChildren()
  children: ReplyForPhoto_G[]

  @Field(() => ReplyForPhoto_G)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForPhoto_G
}
