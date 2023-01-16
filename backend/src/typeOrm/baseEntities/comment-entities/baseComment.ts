import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Text_Entity } from 'src/global/globalDecorators/entity-decorators'
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm'

@ObjectType()
export abstract class BaseCommentEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field({ nullable: true })
  @Column({ default: false })
  published: boolean
  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Text_Entity()
  text: string
}
