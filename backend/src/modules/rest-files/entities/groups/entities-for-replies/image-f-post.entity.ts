import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { ReplyForPostEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'

@ObjectType()
@Entity('image_f_reply_f_post_g')
export class Image_F_Reply_F_Post_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyForPostEntity_G)
  @OneToOne(() => ReplyForPostEntity_G, (reply) => reply.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  reply: ReplyForPostEntity_G
}
