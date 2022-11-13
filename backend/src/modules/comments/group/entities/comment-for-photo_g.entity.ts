
import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/typeOrm/baseEntities/comment-entities/baseComment'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
import { Audio_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-photo.entity'
import { Image_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-photo.entity'
import { Video_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-photo.entity'
import { Galery_Image_G } from 'src/modules/rest-files/entities/groups/galery-entities/image.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('comments_f_galery_image_g')
export class CommentForPhotoEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => Galery_Image_G)
  @ManyToOne(() => Galery_Image_G, (photo) => photo.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  commented_photo: Galery_Image_G

  @Column()
  userId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (comment) => comment.commentForPhotoEntity_G, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'userId' })
  user: UserEntity

  @Field(() => Audio_F_Comment_F_Photo_G)
  @OneToOne(() => Audio_F_Comment_F_Photo_G, (audio) => audio.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  audio: Audio_F_Comment_F_Photo_G

  @Field(() => Image_F_Comment_F_Photo_G)
  @OneToOne(() => Image_F_Comment_F_Photo_G, (image) => image.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  image: Image_F_Comment_F_Photo_G

  @Field(() => Video_F_Comment_F_Photo_G)
  @OneToOne(() => Video_F_Comment_F_Photo_G, (video) => video.comment, {
    onDelete: 'CASCADE',
    eager: true,
  })
  video: Video_F_Comment_F_Photo_G

  @Field(() => ReplyForPhotoEntity_G)
  @OneToMany(() => ReplyForPhotoEntity_G, (reply) => reply.comment, {
    onDelete: 'CASCADE',
  })
  replies: ReplyForPhotoEntity_G
}
