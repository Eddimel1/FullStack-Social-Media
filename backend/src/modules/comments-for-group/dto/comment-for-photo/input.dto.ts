import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCommentForPhoto_I_G {
  @Field()
  photoId: number

  @Field()
  text: string
}


@InputType()
export class UpdateCommentForPhoto_I_G {
  @Field()
  photoId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchCommentForPhoto_I_G {
  @Field()
  photoId: number

  @Field()
  commentId: number

}




