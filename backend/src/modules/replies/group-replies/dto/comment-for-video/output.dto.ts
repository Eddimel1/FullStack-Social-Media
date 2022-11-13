import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForVideoEntity_G } from '../../entities/reply-f-video.entity'

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
  @Field(() => [ReplyForVideoEntity_G])
  descendants: ReplyForVideoEntity_G[]
}

@ObjectType()
export class find_ancestors_F_Video_G {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideoEntity_G])
  ancestors: ReplyForVideoEntity_G[]
}

@ObjectType()
export class find_all_F_Video_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForVideoEntity_G])
  descendants: ReplyForVideoEntity_G[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForVideoEntity_G])
  ancestors: ReplyForVideoEntity_G[]
}
