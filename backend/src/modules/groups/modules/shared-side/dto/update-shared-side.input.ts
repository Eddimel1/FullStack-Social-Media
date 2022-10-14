import { CreateSharedSideInput } from './create-shared-side.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSharedSideInput extends PartialType(CreateSharedSideInput) {
  @Field(() => Int)
  id: number;
}
