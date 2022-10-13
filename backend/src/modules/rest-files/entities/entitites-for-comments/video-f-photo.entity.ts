import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/BaseEntities/file-entities/videoBase'
import { CommentForPhotoEntity } from 'src/modules/comment/entities/comment-for-photo.entity'

@ObjectType()
@Entity('video_f_comment_f_photo')
export class Video_F_Comment_F_Photo extends BaseVideoEntity {
  @Column()
  commentId: number
  @Field(() => CommentForPhotoEntity)
  @OneToOne(() => CommentForPhotoEntity, (comment) => comment.video, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: CommentForPhotoEntity
}
