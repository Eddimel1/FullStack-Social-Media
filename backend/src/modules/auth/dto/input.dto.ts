import { Field, InputType } from '@nestjs/graphql'
import { IsString, MinLength, MaxLength, Matches } from 'class-validator'

@InputType()
export class LoginUserInput {
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  @Field()
  username: string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
//   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
//     message: 'password too weak',
//   })
  @Field()
  password: string
}
