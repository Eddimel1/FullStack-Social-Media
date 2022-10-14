import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PostsForGroup {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
