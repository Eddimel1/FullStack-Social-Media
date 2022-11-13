import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { PostEntity_G } from 'src/modules/posts/group/entities/posts-for-group.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('audio_f_post_g')
export class Audio_F_Post_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => PostEntity_G)
  @OneToOne(() => PostEntity_G, (post) => post.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  post: PostEntity_G
}
