import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'

@ObjectType()
@Entity('image_f_comment_f_video_g')
export class Image_F_Comment_F_Video_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForVideo_G)
  @OneToOne(() => CommentForVideo_G, (comment) => comment.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForVideo_G
}
