import { InputType, Field } from '@nestjs/graphql'
import { Text_Dto } from 'src/global/globalDecorators/entity-decorators'

@InputType()
export class CreatePostInput {
  @Text_Dto()
  text: string
}

@InputType()
export class UpdatePostInput {
  @Field()
  postId: number
  @Field()
  text: string
}

@InputType()
export class FindPostInput {
  @Field({ nullable: true })
  userId?: number

  @Field()
  postId: number
}
