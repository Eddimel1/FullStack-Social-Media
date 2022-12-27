import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { ReplyForPost_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('video_f_reply_f_post_u')
export class Video_F_Reply_F_Post_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPost_U)
  @OneToOne(() => ReplyForPost_U, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForPost_U
}
