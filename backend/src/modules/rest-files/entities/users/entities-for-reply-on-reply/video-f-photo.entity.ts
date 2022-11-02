import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { ReplyOForPhotoEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-photo.entity'


@ObjectType()
@Entity('video_f_replyo_f_photo_u')
export class Video_F_ReplyO_F_Photo_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPhotoEntity_U)
  @OneToOne(() => ReplyOForPhotoEntity_U, (replyo) => replyo.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPhotoEntity_U
}
