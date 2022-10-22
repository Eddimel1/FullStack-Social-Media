import { ObjectType, Field } from '@nestjs/graphql'
import { Column, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
export abstract class UserSide {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  wish: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  proposal: string
}
