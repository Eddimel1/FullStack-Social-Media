import { InputType, Field, Int } from '@nestjs/graphql'
import { FindOne_W_Owner_I } from 'src/sharedDtos/input.dto'

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
