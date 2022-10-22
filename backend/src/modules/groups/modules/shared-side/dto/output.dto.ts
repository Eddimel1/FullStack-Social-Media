import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdateGroupUserSharedSide_O {
  @Field({ nullable: true })
  user_recommendation?: string

  @Field({ nullable: true })
  group_recommendation?: string
}
