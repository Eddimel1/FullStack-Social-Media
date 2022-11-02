import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from '../../../../../BaseEntities/file-entities/videoBase'
import { ReplyForPhotoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'
import { ReplyForPostEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'


@ObjectType()
@Entity('video_f_reply_f_post_u')
export class Video_F_Reply_F_Post_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPostEntity_U)
  @OneToOne(() => ReplyForPostEntity_U, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_U
}
