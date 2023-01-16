import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from 'src/global/globalDtos/output.dto'
import { Post_U } from '../entities/post.entity'

@ObjectType()
export class FindAllPosts_U extends findAll_O {
  @Field(() => [Post_U])
  items: [Post_U]
}
