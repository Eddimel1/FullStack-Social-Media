import { Field, ID, InputType } from '@nestjs/graphql'
import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator'

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
  password: string
  @Field()
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  username: string

  @Field()
  sex: string
  
  @Field()
  birthDate: string

  @Field()
  country: string
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
