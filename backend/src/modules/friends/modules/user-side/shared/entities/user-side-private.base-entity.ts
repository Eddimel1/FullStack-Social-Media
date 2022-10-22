import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
export abstract class UserPrivateSide {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  relation: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  characteristic: string
}
