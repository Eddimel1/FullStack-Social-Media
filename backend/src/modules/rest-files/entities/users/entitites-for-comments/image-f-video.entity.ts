import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { CommentForVideo_U } from 'src/modules/comments/user/entities/comment-for-video.entity'

@ObjectType()
@Entity('image_f_comment_f_video_u')
export class Image_F_Comment_F_Video_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideo_U)
  @OneToOne(() => CommentForVideo_U, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForVideo_U
}
