import { CreateUserSideInput } from './create-user-side.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserSideInput extends PartialType(CreateUserSideInput) {
  @Field(() => Int)
  id: number;
}
