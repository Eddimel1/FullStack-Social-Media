import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { CommentForPhotoEntity_U } from 'src/modules/comments-for-user/entities/comment-for-photo.entity'

@ObjectType()
@Entity('video_f_comment_f_photo')
export class Video_F_Comment_F_Photo_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => CommentForPhotoEntity_U)
  @OneToOne(() => CommentForPhotoEntity_U, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  comment: CommentForPhotoEntity_U
}
