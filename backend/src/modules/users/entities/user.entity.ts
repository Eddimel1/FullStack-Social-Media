import { U_Cover_EN } from 'src/modules/rest-files/entities/users/avatar-and-cover/user-cover.entity'
import { Galery_Audio_U } from './../../rest-files/entities/users/galery-entities/audio.entity'
import { Galery_Video_U } from 'src/modules/rest-files/entities/users/galery-entities/video.entity'
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
import { GroupEntity } from 'src/modules/groups/modules/groups/entities/group.entity'
import { U_Avatar_EN } from 'src/modules/rest-files/entities/users/avatar-and-cover/user-avatar.entity'
import { CommentForPhoto_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'
import { CommentForPost_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
import { CommentForVideo_U } from 'src/modules/comments/user/entities/comment-for-video.entity'
import { CommentForPost_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import { CommentForPhoto_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'
import { ReplyForPhoto_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
import { ReplyForPost_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'
import { ReplyForVideo_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { ReplyForPhoto_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'
import { ReplyForPost_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
import { ReplyForVideo_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'
import { Exclude } from 'class-transformer'
import { UserInfoEntity } from 'src/modules/infos/user/entities/user-info.entity'
import { Post_G } from 'src/modules/posts/group/entities/posts-for-group.entity'
import { Post_U } from 'src/modules/posts/user/entities/post.entity'
import { BasicEntity } from 'src/typeOrm/baseEntities/most-base-entities/base.entity'
import { Galery_Image_U } from '../../rest-files/entities/users/galery-entities/image.entity'

@ObjectType()
export class SanitizedUser extends BasicEntity {
  @Field()
  @Column()
  username: string

  @Field({ defaultValue: false })
  @Column({ default: false })
  confirmed: boolean

  @Field()
  @Column({ default: 'user' })
  role: 'admin' | 'user'

  @Field()
  @Column()
  birthDate: string

  @Field()
  @Column()
  sex: string

  @Field()
  @Column()
  country: string

  @Field(() => UserInfoEntity)
  @OneToOne(() => UserInfoEntity, (info) => info.owner)
  info: UserInfoEntity

  @Field(() => [ChatEntity])
  @OneToMany(() => ChatEntity, (chat) => chat.owner)
  chats: ChatEntity[]

  @Field(() => [Galery_Video_U])
  @OneToMany(() => Galery_Video_U, (video) => video.owner)
  videos: Galery_Video_U[]

  @Field(() => [Galery_Audio_U])
  @OneToMany(() => Galery_Audio_U, (audio) => audio.owner)
  audio: Galery_Audio_U[]

  @Field(() => [Galery_Image_U])
  @OneToMany(() => Galery_Image_U, (image) => image.owner)
  images: Galery_Image_U[]

  @Field(() => U_Avatar_EN, { nullable: true })
  @OneToOne(() => U_Avatar_EN, (avatar) => avatar.owner, {
    nullable: true,
    eager: true,
  })
  avatar: U_Avatar_EN

  @Field(() => U_Cover_EN, { nullable: true })
  @OneToOne(() => U_Cover_EN, (cover) => cover.owner, {
    nullable: true,
    eager: true,
  })
  cover: U_Cover_EN

  @Field(() => [Post_U])
  @OneToMany(() => Post_U, (post) => post.owner)
  posts: Post_U[]

  @Field(() => [Post_G])
  @OneToMany(() => Post_G, (post) => post.user)
  group_posts: Post_G[]

  @Field(() => [GroupEntity])
  @OneToMany(() => GroupEntity, (group) => group.ownerId)
  owned_groups: GroupEntity[]

  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity)
  @JoinTable()
  friends: UserEntity[]

  @Field(() => [CommentForPhoto_G])
  @OneToMany(() => CommentForPhoto_G, (comment) => comment.user)
  commentForPhotoEntity_G: CommentForPhoto_G[]

  @Field(() => [CommentForPost_G])
  @OneToMany(() => CommentForPost_G, (comment) => comment.user)
  commentForPostEntity_G: CommentForPost_G[]

  @Field(() => [CommentForVideo_G])
  @OneToMany(() => CommentForVideo_G, (comment) => comment.user)
  commentForVideoEntity_G: CommentForVideo_G[]

  @Field(() => [CommentForVideo_U])
  @OneToMany(() => CommentForVideo_U, (comment) => comment.user)
  commentForVideoEntity_U: CommentForVideo_U[]

  @Field(() => [CommentForPost_U])
  @OneToMany(() => CommentForPost_U, (comment) => comment.user)
  commentForPostEntity_U: CommentForPost_U[]

  @Field(() => [CommentForPhoto_U])
  @OneToMany(() => CommentForPhoto_U, (comment) => comment.user)
  commentForPhotoEntity_U: CommentForPhoto_U[]

  @Field(() => [ReplyForPhoto_G])
  @OneToMany(() => ReplyForPhoto_G, (reply) => reply.user)
  replyForPhotoEntity_G: ReplyForPhoto_G[]

  @Field(() => [ReplyForPost_G])
  @OneToMany(() => ReplyForPost_G, (reply) => reply.user)
  replyForPostEntity_G: ReplyForPost_G[]

  @Field(() => [ReplyForVideo_G])
  @OneToMany(() => ReplyForVideo_G, (reply) => reply.user)
  replyForVideoEntity_G: ReplyForVideo_G[]

  @Field(() => [ReplyForPhoto_U])
  @OneToMany(() => ReplyForPhoto_U, (reply) => reply.user)
  replyForPhotoEntity_U: ReplyForPhoto_U[]

  @Field(() => [ReplyForPost_U])
  @OneToMany(() => ReplyForPost_U, (reply) => reply.user)
  replyForPostEntity_U: ReplyForPost_U[]

  @Field(() => [ReplyForVideo_U])
  @OneToMany(() => ReplyForVideo_U, (reply) => reply.user)
  replyForVideoEntity_U: ReplyForVideo_U[]
}

@ObjectType()
@Entity('users')
export class UserEntity extends SanitizedUser {
  @Exclude()
  @Column()
  password: string

  @Field()
  @Column()
  email: string

  @Exclude()
  @Column({ nullable: true })
  reset_token: string

  @Exclude()
  @Column({ nullable: true })
  r_token: string

  @Exclude()
  @Column({ default: 0 })
  r_token_version: number
}
