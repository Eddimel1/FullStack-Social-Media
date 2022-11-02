import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { CommentForVideoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-video_g.entity'

@ObjectType()
@Entity('image_f_comment_f_video_g')
export class Image_F_Comment_F_Video_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideoEntity_G)
  @OneToOne(() => CommentForVideoEntity_G, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForVideoEntity_G
}
