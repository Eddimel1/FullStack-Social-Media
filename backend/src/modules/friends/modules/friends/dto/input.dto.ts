import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import {
  UpdateUserSide,
  UpdateUsersPrivateSide,
} from '../../user-side/shared/dto/input.dto'

@InputType()
export class CreateFriendInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}

@InputType()
export class ReadSide_I {
  @Field()
  friendId: number

  @Field()
  sideId: number
}

@InputType()
export class UpdateSide_I {
  @Field()
  friendId: number
  @Field()
  sideId: number
  @Field()
  update_input: UpdateUserSide
}
@InputType()
export class UpdateSharedSide_I {
  @Field()
  sideId: number
  @Field()
  update_input: UpdateUserSide
}

@InputType()
export class UpdatePrivateSide_I {
  @Field()
  friendId: number
  @Field()
  sideId: number
  @Field()
  update_input: UpdateUsersPrivateSide
}
@InputType()
export class UpdateFriendInput extends PartialType(CreateFriendInput) {
  @Field(() => Int)
  id: number
}
