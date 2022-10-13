import { Field, ID } from '@nestjs/graphql'
import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm'

export abstract class BaseVideoEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Field()
  @Column()
  file_name: string

  @Field()
  @Column()
  url: string
}