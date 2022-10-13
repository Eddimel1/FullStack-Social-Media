import { Audio_F_Comment_F_Photo } from '../../rest-files/entities/entitites-for-comments/audio-f-photo.entity'
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { ImageEntity } from 'src/modules/rest-files/entities/galery-entities/image.entity'

import { Image_F_Comment_F_Photo } from 'src/modules/rest-files/entities/entitites-for-comments/image-f-photo.entity'
import { Video_F_Comment_F_Photo } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-photo.entity'

@ObjectType()
@Entity('comments_f_galery_images')
export class CommentForPhotoEntity extends BaseCommentEntity {
  @Column()
  photoId: number
  @Field(() => ImageEntity)
  @ManyToOne(() => ImageEntity, (photo) => photo.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'photoId' })
  commented_photo: ImageEntity

  @Field(() => Audio_F_Comment_F_Photo)
  @OneToOne(() => Audio_F_Comment_F_Photo, (audio) => audio.comment, {
    onDelete: 'CASCADE',
  })

  @Column()
  @Field()
  text:string
  
  audio: Audio_F_Comment_F_Photo

  @Field(() => Image_F_Comment_F_Photo)
  @OneToOne(() => Image_F_Comment_F_Photo, (image) => image.comment, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Comment_F_Photo

  @Field(() => Video_F_Comment_F_Photo)
  @OneToOne(() => Video_F_Comment_F_Photo, (video) => video.comment, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Comment_F_Photo
}
