import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { Post_G } from 'src/modules/posts/group/entities/posts-for-group.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('audio_f_post_g')
export class Audio_F_Post_G extends BaseVideoEntity {
  @Column()
  ownerId: number
  @Field(() => Post_G)
  @OneToOne(() => Post_G, (post) => post.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: Post_G
}
