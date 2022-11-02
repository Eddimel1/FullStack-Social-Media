import { U_Cover_EN } from 'src/modules/rest-files/entities/users/avatar-and-cover/user-cover.entity';
import { Galery_Audio_U } from './../../rest-files/entities/users/galery-entities/audio.entity';
import { Galery_Video_U } from 'src/modules/rest-files/entities/users/galery-entities/video.entity';
import { ChatEntity } from './../../chat/entities/chat.entity'
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'


import { UserInfoEntity } from 'src/modules/user-info/entities/user-info.entity'

import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { U_Avatar_EN } from 'src/modules/rest-files/entities/users/avatar-and-cover/user-avatar.entity';
import { PostEntity_U } from 'src/modules/posts-for-user/entities/post.entity';



@ObjectType()
@Entity('users')
export class UserEntity extends BasicEntity {
  @Column()
  password: string

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  username: string

  @Field(() => UserInfoEntity)
  @OneToOne(() => UserInfoEntity, (info) => info.owner)
  info: UserInfoEntity

  @Field()
  @OneToMany(() => ChatEntity, (chat) => chat.owner)
  chats: ChatEntity

  @Field(() => [Galery_Video_U])
  @OneToMany(() => Galery_Video_U, (video) => video.owner)
  videos: Galery_Video_U[]

  @Field(() => [Galery_Audio_U])
  @OneToMany(() => Galery_Audio_U, (audio) => audio.owner)
  audio: Galery_Audio_U[]

  @Field(() => [Galery_Audio_U])
  @OneToMany(() => Galery_Audio_U, (image) => image.owner)
  images: Galery_Audio_U[]

  @Field(() => U_Avatar_EN)
  @OneToOne(() => U_Avatar_EN, (avatar) => avatar.owner)
  avatar: U_Avatar_EN

  @Field(() => U_Cover_EN)
  @OneToOne(() => U_Cover_EN, (cover) => cover.owner)
  cover: U_Cover_EN

  @Field(() => [PostEntity_U])
  @OneToMany(() => PostEntity_U, (post) => post.owner)
  posts: PostEntity_U[]

  @Field(() => [GroupEntity])
  @OneToMany(() => GroupEntity, (group) => group.ownerId)
  owned_groups: GroupEntity[]

  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity)
  @JoinTable()
  friends: UserEntity[]

  @Field()
  @Column({ default: 'user' })
  role: 'admin' | 'user'

  @Column({ nullable: true })
  r_token: string

  @Column({ default: 0 })
  r_token_version: number
}

@ObjectType()
export class SanitizedUser extends BasicEntity {
  @Field()
  @Column()
  username: string

  @Field(() => UserInfoEntity)
  @OneToOne(() => UserInfoEntity, (info) => info.owner)
  info: UserInfoEntity

  @Field()
  @OneToMany(() => ChatEntity, (chat) => chat.owner)
  chats: ChatEntity

  @Field(() => [Galery_Video_U])
  @OneToMany(() => Galery_Video_U, (video) => video.owner)
  videos: Galery_Video_U[]

  @Field(() => [Galery_Audio_U])
  @OneToMany(() => Galery_Audio_U, (audio) => audio.owner)
  audio: Galery_Audio_U[]

  @Field(() => [Galery_Audio_U])
  @OneToMany(() => Galery_Audio_U, (image) => image.owner)
  images: Galery_Audio_U[]

  @Field(() => U_Avatar_EN)
  @OneToOne(() => U_Avatar_EN, (avatar) => avatar.owner)
  avatar: U_Avatar_EN

  @Field(() => U_Cover_EN)
  @OneToOne(() => U_Cover_EN, (cover) => cover.owner)
  cover: U_Cover_EN

  @Field(() => [PostEntity_U])
  @OneToMany(() => PostEntity_U, (post) => post.owner)
  posts: PostEntity_U[]

  @Field(() => [GroupEntity])
  @OneToMany(() => GroupEntity, (group) => group.ownerId)
  owned_groups: GroupEntity[]

  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity)
  @JoinTable()
  friends: UserEntity[]
}
