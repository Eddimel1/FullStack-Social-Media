import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { CommentForPhotoEntity_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'
import { CommentForPhotoEntity_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'
import { Audio_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-photo.entity'
import { Image_F_Reply_F_Photo_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-reply-f.entity'
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

@ObjectType()
@Entity()
@Tree('closure-table', {
  closureTableName: 'replies_f_photo_u',
  ancestorColumnName: (column) => 'ancestor_' + column.propertyName,
  descendantColumnName: (column) => 'descendant_' + column.propertyName,
})
export class ReplyForPhotoEntity_U extends BaseCommentEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  ownerId: number
  @Field(() => CommentForPhotoEntity_U, { nullable: true })
  @ManyToOne(() => CommentForPhotoEntity_U, (photo) => photo.replies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (reply) => reply.replyForPhotoEntity_U, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Reply_F_Photo_U)
  @OneToOne(() => Audio_F_Reply_F_Photo_U, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Photo_U

  @Field(() => Image_F_Reply_F_Photo_U)
  @OneToOne(() => Image_F_Reply_F_Photo_U, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_U

  @Field(() => Video_F_Reply_F_Photo_U)
  @OneToOne(() => Video_F_Reply_F_Photo_U, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Photo_U

  @Field(() => [ReplyForPhotoEntity_U])
  @TreeChildren({ cascade: true })
  children: ReplyForPhotoEntity_U[]

  @Field(() => ReplyForPhotoEntity_U)
  @TreeParent({ onDelete: 'CASCADE' })
  parent: ReplyForPhotoEntity_U
}
