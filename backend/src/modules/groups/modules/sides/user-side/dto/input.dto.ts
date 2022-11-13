import { InputType, Field } from '@nestjs/graphql'
import { rating } from 'src/global/GlobalTypes/db.types'

@InputType()
export class UpdateUserSide_I {
  @Field({ defaultValue: 0 })
  rating?: rating

  @Field()
  activity: number

  @Field({ nullable: true })
  wish: string
}
