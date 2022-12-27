import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { ReplyForPhoto_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'

@ObjectType()
@Entity('video_f_reply_f_photo_u')
export class Video_F_Reply_F_Photo_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhoto_U)
  @OneToOne(() => ReplyForPhoto_U, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: ReplyForPhoto_U
}
