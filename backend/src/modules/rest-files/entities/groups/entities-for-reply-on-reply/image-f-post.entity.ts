import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from '../../../../../BaseEntities/file-entities/imageBase'
import { ReplyOForPostEntity_G } from 'src/modules/replies/group-reply-on-reply/entities/replyo-f-post.entity'


@ObjectType()
@Entity('image_f_replyo_f_post_g')
export class Image_F_ReplyO_F_Post_G extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPostEntity_G)
  @OneToOne(() => ReplyOForPostEntity_G, (replyo) => replyo.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPostEntity_G
}
