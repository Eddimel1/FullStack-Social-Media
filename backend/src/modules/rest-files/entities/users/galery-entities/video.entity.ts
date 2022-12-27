import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('galery_videos_u')
export class Galery_Video_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.videos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => CommentForVideo_G)
  @ManyToOne(() => CommentForVideo_G, (comment) => comment.owner, {
    onDelete: 'CASCADE',
  })
  comments: CommentForVideo_G[]
}
