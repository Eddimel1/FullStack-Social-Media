import { InputType, Field } from '@nestjs/graphql'
import { FindOne_W_Owner_I } from 'src/global/globalDtos/input.dto'

@InputType()
export class CreatePost_F_Group_I {
  @Field()
  ownerId: number

  @Field()
  text: string
}
@InputType()
export class UpdatePostForGroup_I {
  @Field(() => FindOne_W_Owner_I)
  findOne: FindOne_W_Owner_I

  @Field()
  text: string
}
