import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { ReplyOForVideoEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-video.entity'


@ObjectType()
@Entity('video_f_replyo_f_video_u')
export class Video_F_ReplyO_F_Video_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForVideoEntity_U)
  @OneToOne(() => ReplyOForVideoEntity_U, (replyo) => replyo.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForVideoEntity_U
}
