import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { PostEntity_U } from 'src/modules/posts/user/entities/post.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

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
