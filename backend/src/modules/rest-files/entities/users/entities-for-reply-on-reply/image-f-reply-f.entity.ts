import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { ReplyOForPhotoEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-photo.entity'

@ObjectType()
@Entity('image_f_replyo_f_photo_u')
export class Image_F_ReplyO_F_Photo_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPhotoEntity_U)
  @OneToOne(() => ReplyOForPhotoEntity_U, (replyo) => replyo.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPhotoEntity_U
}
