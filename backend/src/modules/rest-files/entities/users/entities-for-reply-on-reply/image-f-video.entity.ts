import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { ReplyOForVideoEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-video.entity'


@ObjectType()
@Entity('image_f_replyo_f_video_u')
export class Image_F_ReplyO_F_Video_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForVideoEntity_U)
  @OneToOne(() => ReplyOForVideoEntity_U, (replyo) => replyo.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForVideoEntity_U
}
