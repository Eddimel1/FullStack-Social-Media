import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdatePrivateGroupSide_I {
  @Field({ defaultValue: 'participant' })
  user_characteristic?: string

  @Field({ defaultValue: null })
  ban_reason?: string
}
