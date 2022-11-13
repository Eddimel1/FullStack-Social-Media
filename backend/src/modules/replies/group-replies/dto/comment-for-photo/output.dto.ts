import { ObjectType, Field } from '@nestjs/graphql'
import { ReplyForPhotoEntity_G } from '../../entities/reply-f-photo.entity'

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
  @Field(() => [ReplyForPhotoEntity_G])
  descendants: ReplyForPhotoEntity_G[]
}

@ObjectType()
export class find_ancestors_F_Photo_G {
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPhotoEntity_G])
  ancestors: ReplyForPhotoEntity_G[]
}

@ObjectType()
export class find_all_F_Photo_G {
  @Field()
  descendant_count: number
  @Field(() => [ReplyForPhotoEntity_G])
  descendants: ReplyForPhotoEntity_G[]
  @Field()
  ancestor_count: number
  @Field(() => [ReplyForPhotoEntity_G])
  ancestors: ReplyForPhotoEntity_G[]
}
