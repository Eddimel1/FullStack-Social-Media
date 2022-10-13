import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCommentForPhoto_I {
  @Field()
  photoId: number

  @Field()
  text: string
}


@InputType()
export class UpdateCommentForPhoto_I {
  @Field()
  photoId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchCommentForPhoto_I {
  @Field()
  photoId: number

  @Field()
  commentId: number

}
