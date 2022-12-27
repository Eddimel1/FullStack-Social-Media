import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from 'src/global/globalDtos/output.dto'
import { Post_G } from '../entities/posts-for-group.entity'
@ObjectType()
export class FindAllGroupPosts_O extends findAll_O {
  @Field(() => [Post_G])
  items: [Post_G]
}
