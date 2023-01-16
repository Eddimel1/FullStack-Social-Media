import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from '../../../../../global/globalDtos/output.dto'
import { CommentForVideo_U } from '../../entities/comment-for-video.entity'

@ObjectType()
export class comment_F_Video_Remove_O {
  @Field()
  videoId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class FindAllComment_F_Video_U extends findAll_O {
  @Field(() => [CommentForVideo_U])
  items: [CommentForVideo_U]
}