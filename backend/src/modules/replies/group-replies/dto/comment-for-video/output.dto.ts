import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForVideo_G } from '../../entities/reply-f-video.entity'

@ObjectType()
export class reply_F_Video_Remove_G_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class find_descendants_F_Video_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForVideo_G])
  descendants: ReplyForVideo_G[]
}

@ObjectType()
export class find_ancestors_F_Video_G {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideo_G])
  ancestors: ReplyForVideo_G[]
}

@ObjectType()
export class find_all_F_Video_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForVideo_G])
  descendants: ReplyForVideo_G[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideo_G])
  ancestors: ReplyForVideo_G[]
}
