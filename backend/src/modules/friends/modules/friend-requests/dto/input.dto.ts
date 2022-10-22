import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateRequest_I {
  @Field()
  requestedUser: number
}

export class DeleteRequest_I {
  @Field()
  requestingUser: number
  @Field()
  requestedUser: number
}
