import { ObjectType, Field } from '@nestjs/graphql'
import { group_roles } from 'src/GlobalTypes/user.types'

@ObjectType()
export class UpdateGroupSide_O {
  @Field()
  role: group_roles

  @Field({ defaultValue: false })
  blocked?: boolean

  @Field()
  warnings?: number
}
