import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from '../../../../../BaseEntities/file-entities/imageBase'
import { ReplyOForPostEntity_U } from 'src/modules/replies/user-reply-on-reply/entities/replyo-f-post.entity'


@ObjectType()
@Entity('image_f_replyo_f_post_u')
export class Image_F_ReplyO_F_Post_U extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => ReplyOForPostEntity_U)
  @OneToOne(() => ReplyOForPostEntity_U, (replyo) => replyo.image, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  replyo: ReplyOForPostEntity_U
}
