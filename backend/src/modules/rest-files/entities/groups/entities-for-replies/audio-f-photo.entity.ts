import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/BaseEntities/file-entities/baseAudio'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'

@ObjectType()
@Entity('audio_f_reply_f_photo_g')
export class Audio_F_Reply_F_Photo_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPhotoEntity_G)
  @OneToOne(() => ReplyForPhotoEntity_G, (reply) => reply.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPhotoEntity_G
}
