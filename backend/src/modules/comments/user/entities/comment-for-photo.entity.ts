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
import { Galery_Image_U } from 'src/modules/rest-files/entities/users/galery-entities/image.entity'
import { Audio_F_Comment_F_Photo_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/audio-f-photo.entity'
import { Image_F_Comment_F_Photo_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-photo.entity'
import { Video_F_Comment_F_Photo_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-photo.entity'
import { ReplyForPhotoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('comments_f_galery_image_u')
export class CommentForPhotoEntity_U extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => Galery_Image_U)
  @ManyToOne(() => Galery_Image_U, (photo) => photo.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  commented_photo: Galery_Image_U

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (comment) => comment.commentForPhotoEntity_U, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Comment_F_Photo_U)
  @OneToOne(() => Audio_F_Comment_F_Photo_U, (audio) => audio.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  audio: Audio_F_Comment_F_Photo_U

  @Field(() => Image_F_Comment_F_Photo_U)
  @OneToOne(() => Image_F_Comment_F_Photo_U, (image) => image.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  image: Image_F_Comment_F_Photo_U

  @Field(() => Video_F_Comment_F_Photo_U)
  @OneToOne(() => Video_F_Comment_F_Photo_U, (video) => video.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  video: Video_F_Comment_F_Photo_U

  @Field(() => ReplyForPhotoEntity_U)
  @OneToMany(() => ReplyForPhotoEntity_U, (reply) => reply.comment, {
    onDelete: 'CASCADE',
  })
  replies: ReplyForPhotoEntity_U
}
