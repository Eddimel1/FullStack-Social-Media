import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForPostEntity_U } from '../../entities/reply-f-post.entity'

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
  @Field(() => [ReplyForPostEntity_U])
  descendants: ReplyForPostEntity_U[]
}

@ObjectType()
export class find_ancestors_F_POST_U {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPostEntity_U])
  ancestors: ReplyForPostEntity_U[]
}

@ObjectType()
export class find_all_F_Post_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPostEntity_U])
  descendants: ReplyForPostEntity_U[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPostEntity_U])
  ancestors: ReplyForPostEntity_U[]
}