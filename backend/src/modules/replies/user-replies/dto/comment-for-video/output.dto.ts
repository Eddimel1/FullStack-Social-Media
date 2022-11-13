import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForVideoEntity_U } from '../../entities/reply-f-video.entity'

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
  @Field(() => [ReplyForVideoEntity_U])
  descendants: ReplyForVideoEntity_U[]
}

@ObjectType()
export class find_ancestors_F_Video_U {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideoEntity_U])
  ancestors: ReplyForVideoEntity_U[]
}

@ObjectType()
export class find_all_F_Video_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForVideoEntity_U])
  descendants: ReplyForVideoEntity_U[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideoEntity_U])
  ancestors: ReplyForVideoEntity_U[]
}
