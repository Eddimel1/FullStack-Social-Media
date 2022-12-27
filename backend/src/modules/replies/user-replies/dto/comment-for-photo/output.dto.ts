import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForPhoto_U } from '../../entities/reply-f-photo.entity'

@ObjectType()
export class reply_F_Photo_Remove_U_O {
  @Field()
  commentId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class find_descendants_F_Photo_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPhoto_U])
  descendants: ReplyForPhoto_U[]
}

@ObjectType()
export class find_ancestors_F_Photo_U {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPhoto_U])
  ancestors: ReplyForPhoto_U[]
}

@ObjectType()
export class find_all_F_Photo_U {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPhoto_U])
  descendants: ReplyForPhoto_U[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPhoto_U])
  ancestors: ReplyForPhoto_U[]
}
