import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { PostEntity_U } from 'src/modules/posts/user/entities/post.entity'

@ObjectType()
@Entity('video_f_post_u')
export class Video_F_Post_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_U)
  @OneToOne(() => PostEntity_U, (post) => post.video, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_U
}
