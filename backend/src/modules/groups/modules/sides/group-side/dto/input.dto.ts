import { InputType, Field } from '@nestjs/graphql'
import { group_roles } from 'src/global/GlobalTypes/user.types'

@InputType()
export class UpdateGroupSide_I {
  @Field()
  role: group_roles

  @Field({ defaultValue: false })
  blocked?: boolean

  @Field()
  warnings?: number
}
