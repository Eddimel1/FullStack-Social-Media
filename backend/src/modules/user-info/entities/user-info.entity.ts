import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '../../user/entities/user.entity'

@ObjectType()
@Entity('user-info')
export class UserInfoEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @OneToOne(() => UserEntity, (user) => user.info, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date

  @Field()
  @Column()
  first_name: string

  @Field()
  @Column()
  last_name: string

  @Field()
  @Column()
  country: string
}
