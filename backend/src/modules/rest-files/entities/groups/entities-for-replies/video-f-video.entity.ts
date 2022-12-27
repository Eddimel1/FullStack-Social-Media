import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { ReplyForVideo_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'

@ObjectType()
@Entity('video_f_reply_f_video_g')
export class Video_F_Reply_F_Video_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideo_G)
  @OneToOne(() => ReplyForVideo_G, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForVideo_G
}
