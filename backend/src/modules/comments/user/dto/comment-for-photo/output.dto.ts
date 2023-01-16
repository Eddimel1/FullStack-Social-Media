import { Field, ObjectType } from '@nestjs/graphql'
import { findAll_O } from '../../../../../global/globalDtos/output.dto'
import { CommentForPhoto_U } from '../../entities/comment-for-photo.entity'

@ObjectType()
export class comment_F_Photo_Remove_O {
  @Field()
  photoId: number
  @Field()
  isDeleted: boolean
}

@ObjectType()
export class FindAllComment_F_Photo_U extends findAll_O {
  @Field(() => [CommentForPhoto_U])
  items: [CommentForPhoto_U]
}
