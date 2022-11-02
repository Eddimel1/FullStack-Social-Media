import { ObjectType, Field } from '@nestjs/graphql'
import { BaseCommentEntity } from 'src/BaseEntities/comment-entities/baseComment'
import { Audio_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-photo.entity'
import { Image_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-reply-f.entity'
import { Video_F_Reply_F_Photo_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-photo.entity'
import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { ReplyForPhotoEntity_G } from '../../group-replies/entities/reply-f-photo.entity'

@ObjectType()
@Entity('repliesO_f_galery_image_g')
export class ReplyOForPhotoEntity_G extends BaseCommentEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhotoEntity_G)
  @ManyToOne(() => ReplyForPhotoEntity_G, (photo) => photo.repliesO, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_G

  @Field(() => Audio_F_Reply_F_Photo_G)
  @OneToOne(() => Audio_F_Reply_F_Photo_G, (audio) => audio.reply, {
    onDelete: 'CASCADE',
  })
  @Column()
  @Field()
  text: string

  audio: Audio_F_Reply_F_Photo_G

  @Field(() => Image_F_Reply_F_Photo_G)
  @OneToOne(() => Image_F_Reply_F_Photo_G, (image) => image.reply, {
    onDelete: 'CASCADE',
  })
  image: Image_F_Reply_F_Photo_G

  @Field(() => Video_F_Reply_F_Photo_G)
  @OneToOne(() => Video_F_Reply_F_Photo_G, (video) => video.reply, {
    onDelete: 'CASCADE',
  })
  video: Video_F_Reply_F_Photo_G
}
