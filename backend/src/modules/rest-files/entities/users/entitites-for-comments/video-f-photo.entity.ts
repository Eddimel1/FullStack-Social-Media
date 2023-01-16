import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { CommentForPhoto_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'

@ObjectType()
@Entity('video_f_comment_f_photo_u')
export class Video_F_Comment_F_Photo_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhoto_U)
  @OneToOne(() => CommentForPhoto_U, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: CommentForPhoto_U
}
