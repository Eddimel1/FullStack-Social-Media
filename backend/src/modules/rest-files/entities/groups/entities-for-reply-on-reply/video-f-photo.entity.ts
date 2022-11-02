import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { ReplyOForPhotoEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-photo.entity'


@ObjectType()
@Entity('video_f_replyo_f_photo_g')
export class Video_F_ReplyO_F_Photo_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPhotoEntity_G)
  @OneToOne(() => ReplyOForPhotoEntity_G, (replyo) => replyo.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPhotoEntity_G
}
