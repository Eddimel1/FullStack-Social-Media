import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from '../../../../../BaseEntities/file-entities/videoBase'
import { ReplyOForPhotoEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-photo.entity'
import { ReplyOForPostEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-post.entity'


@ObjectType()
@Entity('video_f_replyo_f_post_u')
export class Video_F_ReplyO_F_Post_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPostEntity_U)
  @OneToOne(() => ReplyOForPostEntity_U, (replyo) => replyo.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPhotoEntity_U
}
