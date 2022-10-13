import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../../user/entities/user.entity'
import { BaseVideoEntity } from '../../../../BaseEntities/file-entities/videoBase'
import { CommentForVideoEntity } from 'src/modules/comment/entities/comment-for-video.entity'

@ObjectType()
@Entity('videos')
export class VideoEntity extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.videos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => CommentForVideoEntity)
  @ManyToOne(
    () => CommentForVideoEntity,
    (comment) => comment.commented_video,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  comments: CommentForVideoEntity[]
}
