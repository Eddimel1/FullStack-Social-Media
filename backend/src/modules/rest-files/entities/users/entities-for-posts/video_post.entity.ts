import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'
import { Post_U } from 'src/modules/posts/user/entities/post.entity'

@ObjectType()
@Entity('video_f_post_u')
export class Video_F_Post_U extends BaseVideoEntity {
  @Field()
  @Column()
  ownerId: number
  @Field(() => Post_U)
  @OneToOne(() => Post_U, (post) => post.video, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: Post_U
}
