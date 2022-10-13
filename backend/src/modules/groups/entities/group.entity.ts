import {
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../user/entities/user.entity'

@ObjectType()
@Entity('groups')
export class GroupEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  //manualy create a joined table which will connect users and groups together
  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity, (user) => user.groups, { onDelete: 'CASCADE' })
  @JoinTable({ name: 'user_groups' })
  users: UserEntity[]

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date
}
