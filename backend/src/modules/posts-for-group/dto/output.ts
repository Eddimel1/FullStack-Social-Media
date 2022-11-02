import { findAll_O } from '../../../sharedDtos/output.dto'
import { Field, ObjectType } from '@nestjs/graphql'
import { PostEntity_G } from '../entities/posts-for-group.entity'
@ObjectType()
export class FindAllGroupPosts_O extends findAll_O {
  @Field(() => [PostEntity_G])
  items: [PostEntity_G]
}
