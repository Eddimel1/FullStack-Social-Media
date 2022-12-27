import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseAudioEntity } from 'src/typeOrm/baseEntities/file-entities/baseAudio'
import { CommentForPost_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'

@ObjectType()
@Entity('audio_f_comment_f_post_g')
export class Audio_F_Comment_F_Post_G extends BaseAudioEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPost_G)
  @OneToOne(() => CommentForPost_G, (comment) => comment.audio, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPost_G
}
