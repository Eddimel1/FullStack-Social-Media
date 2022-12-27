import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'

@ObjectType()
@Entity('video_f_comment_f_video_g')
export class Video_F_Comment_F_Video_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideo_G)
  @OneToOne(() => CommentForVideo_G, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForVideo_G
}
