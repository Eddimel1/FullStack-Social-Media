import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from '../../../../../BaseEntities/file-entities/videoBase'
import { ReplyOForPhotoEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-photo.entity'
import { ReplyOForPostEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-post.entity'


@ObjectType()
@Entity('video_f_replyo_f_post_g')
export class Video_F_ReplyO_F_Post_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPostEntity_G)
  @OneToOne(() => ReplyOForPostEntity_G, (replyo) => replyo.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPhotoEntity_G
}
