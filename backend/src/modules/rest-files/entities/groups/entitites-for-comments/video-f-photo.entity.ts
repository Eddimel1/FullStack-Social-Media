import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { CommentForPhoto_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'

@ObjectType()
@Entity('video_f_comment_f_photo_g')
export class Video_F_Comment_F_Photo_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhoto_G)
  @OneToOne(() => CommentForPhoto_G, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPhoto_G
}
