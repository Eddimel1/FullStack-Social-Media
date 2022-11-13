import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { ReplyForPhotoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'

@ObjectType()
@Entity('image_f_reply_f_photo_u')
export class Image_F_Reply_F_Photo_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhotoEntity_U)
  @OneToOne(() => ReplyForPhotoEntity_U, (reply) => reply.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_U
}
