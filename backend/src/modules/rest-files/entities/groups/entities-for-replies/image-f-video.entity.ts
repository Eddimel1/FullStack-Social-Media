import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { ReplyForVideo_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'

@ObjectType()
@Entity('image_f_reply_f_video_g')
export class Image_F_Reply_F_Video_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideo_G)
  @OneToOne(() => ReplyForVideo_G, (reply) => reply.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForVideo_G
}
