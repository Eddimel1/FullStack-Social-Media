import { InputType, Field } from '@nestjs/graphql'


@InputType()
export class UpdateUserPrivateSide_I {
  @Field({ nullable: true })
  favorite?: boolean

  @Field({ nullable: true })
  group_characteristic?: string

}
