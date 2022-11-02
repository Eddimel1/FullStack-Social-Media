import { GroupInfo } from './../../../../group-info/entities/group-info.entity'
import { G_Cover_EN } from 'src/modules/rest-files/entities/groups/avatar-and-cover/group-cover.entity'
import { Galery_Image_G } from './../../../../rest-files/entities/groups/galery-entities/image.entity'
import { Galery_Video_G } from 'src/modules/rest-files/entities/groups/galery-entities/video.entity'
import { Galery_Audio_G } from 'src/modules/rest-files/entities/groups/galery-entities/audio.entity'
import { G_Avatar_EN } from 'src/modules/rest-files/entities/groups/avatar-and-cover/group-avatar.entity'
import { ObjectType, Field } from '@nestjs/graphql'
import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'

import { UserEntity } from 'src/modules/user/entities/user.entity'
import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { PostEntity_G } from 'src/modules/posts-for-group/entities/posts-for-group.entity'

@ObjectType()
@Entity('groups')
export class GroupEntity extends BasicEntity {
  @Column()
  ownerId: number

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.owned_groups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field(() => [Galery_Audio_G])
  @OneToMany(() => Galery_Audio_G, (audio) => audio.owner)
  audio: Galery_Audio_G[]

  @Field(() => [Galery_Video_G])
  @OneToMany(() => Galery_Video_G, (video) => video.owner)
  videos: Galery_Video_G[]

  @Field(() => [Galery_Image_G])
  @OneToMany(() => Galery_Image_G, (image) => image.owner)
  images: Galery_Image_G[]

  @Field(() => [PostEntity_G])
  @OneToMany(() => PostEntity_G, (post) => post.owner)
  posts: PostEntity_G[]

  @Field(() => G_Avatar_EN)
  @OneToOne(() => G_Avatar_EN, (group_avatar) => group_avatar.ownerId, {
    cascade: true,
  })
  avatar: G_Avatar_EN

  @Field(() => G_Cover_EN)
  @OneToOne(() => G_Cover_EN, (group_avatar) => group_avatar.ownerId, {
    cascade: true,
  })
  cover: G_Cover_EN

  @Field(() => GroupInfo)
  @OneToOne(() => GroupInfo, (group_info) => group_info.group, {
    onDelete: 'CASCADE',
  })
  group_info: GroupInfo

  @Column()
  @Field()
  name: string

  @Column()
  @Field()
  slogan: string

  @Column()
  @Field()
  category: string
}
