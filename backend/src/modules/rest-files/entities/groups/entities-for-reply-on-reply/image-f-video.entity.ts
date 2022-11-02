import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { ReplyOForVideoEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-video.entity'


@ObjectType()
@Entity('image_f_replyo_f_video_g')
export class Image_F_ReplyO_F_Video_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForVideoEntity_G)
  @OneToOne(() => ReplyOForVideoEntity_G, (replyo) => replyo.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForVideoEntity_G
}
