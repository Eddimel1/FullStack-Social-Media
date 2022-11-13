import { InputType, Field, ObjectType } from '@nestjs/graphql'
import { rating } from 'src/global/GlobalTypes/db.types'

@ObjectType()
export class UpdateUserSide_O {
  @Field({ defaultValue: 0 })
  rating?: rating

  @Field()
  activity: number

  @Field({ nullable: true })
  wish: string
}
