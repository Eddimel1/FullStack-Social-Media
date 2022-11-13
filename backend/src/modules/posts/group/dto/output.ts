import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from 'src/global/globalDtos/output.dto'
import { PostEntity_G } from '../entities/posts-for-group.entity'
@ObjectType()
export class FindAllGroupPosts_O extends findAll_O {
  @Field(() => [PostEntity_G])
  items: [PostEntity_G]
}
