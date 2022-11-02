import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { ReplyOForPhotoEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-photo.entity'


@ObjectType()
@Entity('image_f_replyo_f_photo_g')
export class Image_F_ReplyO_F_Photo_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPhotoEntity_G)
  @OneToOne(() => ReplyOForPhotoEntity_G, (replyo) => replyo.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPhotoEntity_G
}
