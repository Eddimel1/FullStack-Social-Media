import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { ReplyForVideoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'


@ObjectType()
@Entity('image_f_reply_f_video_g')
export class Image_F_Reply_F_Video_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideoEntity_G)
  @OneToOne(() => ReplyForVideoEntity_G, (reply) => reply.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForVideoEntity_G
}
