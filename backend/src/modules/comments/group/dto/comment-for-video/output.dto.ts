import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from '../../../../../global/globalDtos/output.dto'
import { CommentForVideo_G } from '../../entities/comment-for-video_g.entity'

@ObjectType()
export class comment_F_Video_Remove_O {
  @Field()
  videoId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class FindAllComment_F_Video_G extends findAll_O {
  @Field(() => [CommentForVideo_G])
  items: [CommentForVideo_G]
}
