import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from '../../../../../global/globalDtos/output.dto'
import { CommentForPost_G } from '../../entities/comment-for-post_g.entity'

@ObjectType()
export class comment_F_Post_Remove_O {
  @Field()
  postId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class FindAllComment_F_Post_G extends findAll_O {
  @Field(() => [CommentForPost_G])
  items: CommentForPost_G[]
}
