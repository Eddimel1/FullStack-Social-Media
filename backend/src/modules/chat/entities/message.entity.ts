import { ChatEntity } from './chat.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity('messages')
export class MessageEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  chatId: number
  @Field(() => ChatEntity)
  @ManyToOne(() => ChatEntity, (chat) => chat.messages, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'chatId' })
  chat: ChatEntity

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Field()
  @Column()
  from: number

  @Field()
  @Column()
  to: number

  @Field()
  @Column()
  message: string
}
