import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { ReplyForPhotoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'


@ObjectType()
@Entity('video_f_reply_f_photo_u')
export class Video_F_Reply_F_Photo_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhotoEntity_U)
  @OneToOne(() => ReplyForPhotoEntity_U, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_U
}
