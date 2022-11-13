import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { ReplyForVideoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'

@ObjectType()
@Entity('video_f_reply_f_video_g')
export class Video_F_Reply_F_Video_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideoEntity_G)
  @OneToOne(() => ReplyForVideoEntity_G, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForVideoEntity_G
}
