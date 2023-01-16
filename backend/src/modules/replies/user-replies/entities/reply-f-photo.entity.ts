import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForPhoto_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'
import { Audio_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-photo.entity'

import { Video_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-photo.entity'
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
import { Image_F_Reply_F_Photo_U } from '../../../rest-files/entities/users/entities-for-replies/image-f-photo.entity'

@ObjectType()
@Entity()
@Tree('closure-table', {
  closureTableName: 'replies_f_photo_u',
  ancestorColumnName: (column) => 'ancestor_' + column.propertyName,
  descendantColumnName: (column) => 'descendant_' + column.propertyName,
})
export class ReplyForPhoto_U extends BaseCommentEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForPhoto_U, { nullable: true })
  @ManyToOne(() => CommentForPhoto_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhoto_U

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForPhotoEntity_U, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Photo_U)
  @OneToOne(() => Audio_F_Reply_F_Photo_U, (audio) => audio.owner, {
    onDelete: 'CASCADE',
  })
  audio: Audio_F_Reply_F_Photo_U

  @Field(() => Image_F_Reply_F_Photo_U)
  @OneToOne(() => Image_F_Reply_F_Photo_U, (image) => image.owner, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_U

  @Field(() => Video_F_Reply_F_Photo_U)
  @OneToOne(() => Video_F_Reply_F_Photo_U, (video) => video.owner, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Photo_U

  @Field(() => [ReplyForPhoto_U], { nullable: true, defaultValue: [] })
  @TreeChildren({ cascade: true })
  children: ReplyForPhoto_U[]

  @Field(() => ReplyForPhoto_U)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForPhoto_U
}
