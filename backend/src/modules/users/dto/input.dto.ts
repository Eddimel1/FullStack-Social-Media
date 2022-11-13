import { Field, ID, InputType } from '@nestjs/graphql'
import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsEmail,
} from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsEmail()
  email: string

  @Field()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
//   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
//     message: 'password too weak',
//   })
  password: string
  @Field()

  @IsString()
  @MinLength(4)
  @MaxLength(15)
  username: string
}

@InputType()
export class SensitiveUserInput {
  @Field(() => ID)
  id: number

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  username: string
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  username: string
}
