import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { Galery_Video_U } from 'src/modules/rest-files/entities/users/galery-entities/video.entity'
import { Audio_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/audio-f-video.entity'
import { Image_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-video.entity'
import { Video_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-video.entity'
import { ReplyForVideo_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('comments_f_galery_video_u')
export class CommentForVideo_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => Galery_Video_U)
  @ManyToOne(() => Galery_Video_U, (video) => video.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: Galery_Video_U

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (comment) => comment.commentForVideoEntity_U, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Comment_F_Video_U)
  @OneToOne(() => Audio_F_Comment_F_Video_U, (audio) => audio.owner, {
    onDelete: 'CASCADE',
    eager: true,
  })
  audio: Audio_F_Comment_F_Video_U

  @Field(() => Image_F_Comment_F_Video_U)
  @OneToOne(() => Image_F_Comment_F_Video_U, (image) => image.owner, {
    onDelete: 'CASCADE',
    eager: true,
  })
  image: Image_F_Comment_F_Video_U

  @Field(() => Video_F_Comment_F_Video_U)
  @OneToOne(() => Video_F_Comment_F_Video_U, (video) => video.owner, {
    onDelete: 'CASCADE',
    eager: true,
  })
  video: Video_F_Comment_F_Video_U

  @Field(() => ReplyForVideo_U)
  @OneToMany(() => ReplyForVideo_U, (reply) => reply.comment, {
    onDelete: 'CASCADE',
  })
  replies: ReplyForVideo_U
}
