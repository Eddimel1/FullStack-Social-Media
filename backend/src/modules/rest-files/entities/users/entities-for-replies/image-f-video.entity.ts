import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { ReplyForVideoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'


@ObjectType()
@Entity('image_f_reply_f_video_u')
export class Image_F_Reply_F_Video_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideoEntity_U)
  @OneToOne(() => ReplyForVideoEntity_U, (reply) => reply.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForVideoEntity_U
}
