import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class CreateGroupInfo_I {
  @Field()
  groupId: number

  @Field()
  description: string

  @Field({ nullable: true })
  status: string
}

@InputType()
export class UpdateGroupInfo_I {
  @Field()
  groupId: number

  @Field({ nullable: true })
  description: string

  @Field({ nullable: true })
  status: string
}
