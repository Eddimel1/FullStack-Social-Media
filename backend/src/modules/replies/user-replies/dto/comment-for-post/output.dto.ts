import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForPost_U } from '../../entities/reply-f-post.entity'

@ObjectType()
export class reply_F_Post_Remove_U_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class find_descendants_F_POST_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPost_U])
  descendants: ReplyForPost_U[]
}

@ObjectType()
export class find_ancestors_F_POST_U {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPost_U])
  ancestors: ReplyForPost_U[]
}

@ObjectType()
export class find_all_F_Post_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPost_U])
  descendants: ReplyForPost_U[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPost_U])
  ancestors: ReplyForPost_U[]
}