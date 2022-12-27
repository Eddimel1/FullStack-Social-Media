import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('galery_videos_g')
export class Galery_Video_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => GroupEntity)
  @ManyToOne(() => GroupEntity, (group) => group.videos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: GroupEntity

  @Field(() => CommentForVideo_G)
  @ManyToOne(() => CommentForVideo_G, (comment) => comment.owner, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  comments: CommentForVideo_G[]
}
