import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Text_Entity } from 'src/global/globalDecorators/entity-decorators'
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
export abstract class BaseCommentEntity {
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
}
