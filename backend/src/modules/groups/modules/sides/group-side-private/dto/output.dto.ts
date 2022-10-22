import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UpdatePrivateGroupSide_O {
  @Field({ defaultValue: 'participant' })
  user_characteristic?: string

  @Field({ defaultValue: null })
  ban_reason?: string
}
