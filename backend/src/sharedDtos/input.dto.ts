import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class FindOne_W_Owner_I {
  @Field({ nullable: true })
  ownerId: number

  @Field()
  id: number
}
