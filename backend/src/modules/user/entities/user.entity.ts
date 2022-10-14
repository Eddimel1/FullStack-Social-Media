import { GroupEntity } from './../../groups/entities/group.entity';
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
import { VideoEntity } from '../../rest-files/entities/galery-entities/video.entity'
import { AudioEntity } from '../../rest-files/entities/galery-entities/audio.entity'
import { ImageEntity } from '../../rest-files/entities/galery-entities/image.entity'
import { PostEntity } from 'src/modules/post/entities/post.entity'
import { UserInfoEntity } from 'src/modules/user-info/entities/user-info.entity'
import { Groups_A_Users_Mediator_E } from 'src/modules/groups/entities/gr-and-u_joined.entity'
import { BasicEntity } from 'src/BaseEntities/most-base-entities/base.entity'

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

  @Field(() => [VideoEntity])
  @OneToMany(() => VideoEntity, (video) => video.owner)
  videos: VideoEntity[]

  @Field(() => [AudioEntity])
  @OneToMany(() => AudioEntity, (audio) => audio.owner)
  audio: AudioEntity[]

  @Field(() => [ImageEntity])
  @OneToMany(() => ImageEntity, (image) => image.owner)
  images: ImageEntity[]

  @Field(() => [PostEntity])
  @OneToMany(() => PostEntity, (post) => post.owner)
  posts: PostEntity[]

  @Field(() => [Groups_A_Users_Mediator_E])
  @OneToMany(() => Groups_A_Users_Mediator_E, (group) => group.users)
  connectionToGroup: Groups_A_Users_Mediator_E[]

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
