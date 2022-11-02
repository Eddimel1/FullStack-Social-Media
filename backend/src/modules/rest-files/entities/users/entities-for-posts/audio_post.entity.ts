import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from '../../../../../BaseEntities/file-entities/videoBase'
import { PostEntity_U } from 'src/modules/posts-for-user/entities/post.entity'



@ObjectType()
@Entity('audio_f_post_u')
export class Audio_F_Post_U extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_U)
  @OneToOne(() => PostEntity_U, (post) => post.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_U
}
