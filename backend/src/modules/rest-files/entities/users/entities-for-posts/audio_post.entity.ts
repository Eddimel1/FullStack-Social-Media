import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { Post_U } from 'src/modules/posts/user/entities/post.entity'
import { BaseVideoEntity } from 'src/typeOrm/baseEntities/file-entities/videoBase'

@ObjectType()
@Entity('audio_f_post_u')
export class Audio_F_Post_U extends BaseVideoEntity {
    @Field()
  @Column()
  ownerId: number
  @Field(() => Post_U)
  @OneToOne(() => Post_U, (post) => post.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: Post_U
}
