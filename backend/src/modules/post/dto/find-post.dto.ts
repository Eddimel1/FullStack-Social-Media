import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class FindPostInput {
  @Field({ nullable: true })
  userId?: number

  @Field()
  postId: number
}
