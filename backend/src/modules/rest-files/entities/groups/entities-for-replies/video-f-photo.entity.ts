import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'


@ObjectType()
@Entity('video_f_reply_f_photo_g')
export class Video_F_Reply_F_Photo_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhotoEntity_G)
  @OneToOne(() => ReplyForPhotoEntity_G, (reply) => reply.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_G
}
