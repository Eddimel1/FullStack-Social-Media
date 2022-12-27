import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { CommentForPhoto_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'

@ObjectType()
@Entity('audio_f_comment_f_photo_g')
export class Audio_F_Comment_F_Photo_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhoto_G)
  @OneToOne(() => CommentForPhoto_G, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPhoto_G
}
