import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../../../user/entities/user.entity'
import { BaseVideoEntity } from '../../../../../BaseEntities/file-entities/videoBase'
import { CommentForVideoEntity_G } from 'src/modules/comments-for-group/entities/comment-for-video_g.entity'


@ObjectType()
@Entity('galery_videos_u')
export class Galery_Video_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.videos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => CommentForVideoEntity_G)
  @ManyToOne(
    () => CommentForVideoEntity_G,
    (comment) => comment.commented_video,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  comments: CommentForVideoEntity_G[]
}
