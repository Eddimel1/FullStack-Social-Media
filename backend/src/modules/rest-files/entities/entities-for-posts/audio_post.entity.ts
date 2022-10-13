import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseVideoEntity } from '../../../../BaseEntities/file-entities/videoBase'
import { PostEntity } from 'src/modules/post/entities/post.entity'

@ObjectType()
@Entity('post_audio')
export class AudioPostEntity extends BaseVideoEntity {
  @Column()
  postId: number
  @Field(() => PostEntity)
  @OneToOne(() => PostEntity, (post) => post.audio, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  post: PostEntity
}
