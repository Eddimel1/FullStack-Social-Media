import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { ReplyForVideo_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'

@ObjectType()
@Entity('video_f_reply_f_video_u')
export class Video_F_Reply_F_Video_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForVideo_U)
  @OneToOne(() => ReplyForVideo_U, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForVideo_U
}
