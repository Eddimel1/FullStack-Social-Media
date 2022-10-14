import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSharedSideInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
