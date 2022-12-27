import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForVideo_U } from '../../entities/reply-f-video.entity'

@ObjectType()
export class reply_F_Video_Remove_U_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class find_descendants_F_Video_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForVideo_U])
  descendants: ReplyForVideo_U[]
}

@ObjectType()
export class find_ancestors_F_Video_U {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideo_U])
  ancestors: ReplyForVideo_U[]
}

@ObjectType()
export class find_all_F_Video_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForVideo_U])
  descendants: ReplyForVideo_U[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideo_U])
  ancestors: ReplyForVideo_U[]
}
