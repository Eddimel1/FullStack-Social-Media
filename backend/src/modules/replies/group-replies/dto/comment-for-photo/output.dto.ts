import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForPhoto_G } from '../../entities/reply-f-photo.entity'

@ObjectType()
export class reply_F_Photo_Remove_G_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class find_descendants_F_Photo_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPhoto_G])
  descendants: ReplyForPhoto_G[]
}

@ObjectType()
export class find_ancestors_F_Photo_G {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPhoto_G])
  ancestors: ReplyForPhoto_G[]
}

@ObjectType()
export class find_all_F_Photo_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPhoto_G])
  descendants: ReplyForPhoto_G[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPhoto_G])
  ancestors: ReplyForPhoto_G[]
}
