import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UsersJoined {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
