import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class CreateUser1SideInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class UpdateUser1SideInput extends PartialType(CreateUser1SideInput) {
  @Field(() => Int)
  id: number
}
