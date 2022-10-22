import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateRequest_G {
  @Field()
  userId: number

  @Field()
  groupId: number
}


@InputType()
export class FindRequest_G {
  @Field()
  userId: number

  @Field()
  groupId: number
}