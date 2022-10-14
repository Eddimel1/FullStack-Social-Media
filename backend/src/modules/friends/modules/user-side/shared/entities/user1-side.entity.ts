import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User1Side {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
