import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateUserSide {
  id: number

  @Field({ nullable: true })
  wish: string

  @Field({ nullable: true })
  proposal: string
}

@InputType()
export class UpdateUsersPrivateSide {
  @Field({ nullable: true })
  relation: string

  @Field({ nullable: true })
  characteristic: string
}
