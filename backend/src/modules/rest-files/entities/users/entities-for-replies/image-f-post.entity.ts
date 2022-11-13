import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { ReplyForPostEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'

@ObjectType()
@Entity('image_f_reply_f_post_u')
export class Image_F_Reply_F_Post_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPostEntity_U)
  @OneToOne(() => ReplyForPostEntity_U, (reply) => reply.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPostEntity_U
}
