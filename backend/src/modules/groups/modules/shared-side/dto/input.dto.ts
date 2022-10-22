import { InputType, Field } from '@nestjs/graphql'


@InputType()
export class UpdateGroupUserSharedSide_I {
  @Field({ nullable: true })
  user_recommendation?: string

  @Field({ nullable: true })
  group_recommendation?: string

}
