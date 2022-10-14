import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GroupSide {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
