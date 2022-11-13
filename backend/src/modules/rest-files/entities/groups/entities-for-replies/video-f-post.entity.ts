import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
import { ReplyForPostEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('video_f_reply_f_post_g')
export class Video_F_Reply_F_Post_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPostEntity_G)
  @OneToOne(() => ReplyForPostEntity_G, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_G
}
