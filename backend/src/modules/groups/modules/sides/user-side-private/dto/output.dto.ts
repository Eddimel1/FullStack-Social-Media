import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdatePrivateUserSide_O {
  @Field({ nullable: true })
  favorite?: boolean

  @Field({ nullable: true })
  group_characteristic?: string
}
