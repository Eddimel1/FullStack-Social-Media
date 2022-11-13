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
import { CommentForPhotoEntity_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'
import { CommentForPostEntity_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'
import { CommentForVideoEntity_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'
import { CommentForVideoEntity_U } from 'src/modules/comments/user/entities/comment-for-video.entity'
import { CommentForPostEntity_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import { CommentForPhotoEntity_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'
import { ReplyForPhotoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-photo.entity'
import { ReplyForPostEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-post.entity'
import { ReplyForVideoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { ReplyForPhotoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-photo.entity'
import { ReplyForPostEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-post.entity'
import { ReplyForVideoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'
import { Exclude } from 'class-transformer'
import { UserInfoEntity } from 'src/modules/infos/user/entities/user-info.entity'
import { PostEntity_G } from 'src/modules/posts/group/entities/posts-for-group.entity'
import { PostEntity_U } from 'src/modules/posts/user/entities/post.entity'
import { BasicEntity } from 'src/typeOrm/baseEntities/most-base-entities/base.entity'

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

  @Field(() => [PostEntity_G])
  @OneToMany(() => PostEntity_G, (post) => post.user)
  group_posts: PostEntity_G[]

  @Field(() => [GroupEntity])
  @OneToMany(() => GroupEntity, (group) => group.ownerId)
  owned_groups: GroupEntity[]

  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity)
  @JoinTable()
  friends: UserEntity[]

  @Field(() => [CommentForPhotoEntity_G])
  @OneToMany(() => CommentForPhotoEntity_G, (comment) => comment.user)
  commentForPhotoEntity_G: CommentForPhotoEntity_G[]

  @Field(() => [CommentForPostEntity_G])
  @OneToMany(() => CommentForPostEntity_G, (comment) => comment.user)
  commentForPostEntity_G: CommentForPostEntity_G[]

  @Field(() => [CommentForVideoEntity_G])
  @OneToMany(() => CommentForVideoEntity_G, (comment) => comment.user)
  commentForVideoEntity_G: CommentForVideoEntity_G[]

  @Field(() => [CommentForVideoEntity_U])
  @OneToMany(() => CommentForVideoEntity_U, (comment) => comment.user)
  commentForVideoEntity_U: CommentForVideoEntity_U[]

  @Field(() => [CommentForPostEntity_U])
  @OneToMany(() => CommentForPostEntity_U, (comment) => comment.user)
  commentForPostEntity_U: CommentForPostEntity_U[]

  @Field(() => [CommentForPhotoEntity_U])
  @OneToMany(() => CommentForPhotoEntity_U, (comment) => comment.user)
  commentForPhotoEntity_U: CommentForPhotoEntity_U[]

  @Field(() => [ReplyForPhotoEntity_G])
  @OneToMany(() => ReplyForPhotoEntity_G, (reply) => reply.user)
  replyForPhotoEntity_G: ReplyForPhotoEntity_G[]

  @Field(() => [ReplyForPostEntity_G])
  @OneToMany(() => ReplyForPostEntity_G, (reply) => reply.user)
  replyForPostEntity_G: ReplyForPostEntity_G[]

  @Field(() => [ReplyForVideoEntity_G])
  @OneToMany(() => ReplyForVideoEntity_G, (reply) => reply.user)
  replyForVideoEntity_G: ReplyForVideoEntity_G[]

  @Field(() => [ReplyForPhotoEntity_U])
  @OneToMany(() => ReplyForPhotoEntity_U, (reply) => reply.user)
  replyForPhotoEntity_U: ReplyForPhotoEntity_U[]

  @Field(() => [ReplyForPostEntity_U])
  @OneToMany(() => ReplyForPostEntity_U, (reply) => reply.user)
  replyForPostEntity_U: ReplyForPostEntity_U[]

  @Field(() => [ReplyForVideoEntity_U])
  @OneToMany(() => ReplyForVideoEntity_U, (reply) => reply.user)
  replyForVideoEntity_U: ReplyForVideoEntity_U[]
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

  @Column({ default: 'user' })
  role: 'admin' | 'user'

  @Exclude()
  @Column({ nullable: true })
  r_token: string

  @Exclude()
  @Column({ default: 0 })
  r_token_version: number
}
