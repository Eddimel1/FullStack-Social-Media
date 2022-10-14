import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateGroupInput {
  @Field()
  name: string

  @Field()
  slogan: string
}

@InputType()
export class CreateRelationship_I {
  @Field()
  userId: number

  @Field()
  groupId: number
}