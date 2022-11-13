import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForPostEntity_G } from '../../entities/reply-f-post.entity'

@ObjectType()
export class reply_F_Post_Remove_G_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class find_descendants_F_POST_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPostEntity_G])
  descendants: ReplyForPostEntity_G[]
}

@ObjectType()
export class find_ancestors_F_POST_G {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPostEntity_G])
  ancestors: ReplyForPostEntity_G[]
}

@ObjectType()
export class find_all_F_Post_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPostEntity_G])
  descendants: ReplyForPostEntity_G[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPostEntity_G])
  ancestors: ReplyForPostEntity_G[]
}
