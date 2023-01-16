import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from '../../../../../global/globalDtos/output.dto'
import { CommentForPhoto_G } from '../../entities/comment-for-photo_g.entity'

@ObjectType()
export class comment_F_Photo_Remove_O {
  @Field()
  photoId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class FindAllComment_F_Photo_G extends findAll_O {
  @Field(() => [CommentForPhoto_G])
  items: [CommentForPhoto_G]
}