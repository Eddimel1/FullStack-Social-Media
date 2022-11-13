import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateComment {
  @Field()
  ownerId: number

  @Field()
  text: string
}


@InputType()
export class UpdateComment {
  @Field()
  ownerId: number

  @Field()
  commentId: number

  @Field()
  text: string
}

@InputType()
export class SearchComment {
  @Field()
  ownerId: number

  @Field()
  commentId: number

}