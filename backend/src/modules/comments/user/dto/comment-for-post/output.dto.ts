import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from '../../../../../global/globalDtos/output.dto'
import { CommentForPost_U } from '../../entities/comment-for-post.entity'

@ObjectType()
export class comment_F_Post_Remove_O {
  @Field()
  postId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class FindAllComment_F_Post_U extends findAll_O {
  @Field(() => [CommentForPost_U])
  items: [CommentForPost_U]
}
