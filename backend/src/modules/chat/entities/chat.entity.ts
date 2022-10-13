import { UserEntity } from '../../user/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { MessageEntity } from './message.entity'

@ObjectType()
@Entity('chats')
export class ChatEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.chats, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field()
  @Column()
  companion: number

  @Field(() => [MessageEntity])
  @OneToMany(() => MessageEntity, (message) => message.chat)
  messages: MessageEntity[]
}
