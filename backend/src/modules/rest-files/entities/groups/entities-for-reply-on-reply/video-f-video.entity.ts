import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { ReplyOForVideoEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-video.entity'


@ObjectType()
@Entity('video_f_replyo_f_video_g')
export class Video_F_ReplyO_F_Video_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForVideoEntity_G)
  @OneToOne(() => ReplyOForVideoEntity_G, (replyo) => replyo.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForVideoEntity_G
}
