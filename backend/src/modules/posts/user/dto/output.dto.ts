import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from 'src/global/globalDtos/output.dto'
import { PostEntity_U } from '../entities/post.entity'

@ObjectType()
export class FindAllPosts_O extends findAll_O {
  @Field(() => [PostEntity_U])
  items: [PostEntity_U]
}
