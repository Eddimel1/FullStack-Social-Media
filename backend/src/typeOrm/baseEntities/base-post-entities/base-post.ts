import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Text_Entity } from 'src/global/globalDecorators/entity-decorators'
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm'

@ObjectType()
export abstract class BasePostEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Text_Entity()
  text: string

  @Field()
  @Column({ default: 0 })
  likes: number

  @Field({ nullable: true })
  @Column({ default: false, nullable: true })
  published: boolean

  @Field({ nullable: true })
  @Column({ default: 'public', nullable: true })
  privacy: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  subject: string
}
