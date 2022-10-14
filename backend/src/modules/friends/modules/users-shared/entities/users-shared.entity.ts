import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UsersShared {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
