import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateRequest {
  @Field()
  requestedUser: number
}

export class DeleteRequest {
  @Field()
  requestingUser: number
  @Field()
  requestedUser: number
}
