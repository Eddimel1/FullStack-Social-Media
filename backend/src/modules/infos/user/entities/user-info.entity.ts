import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { UserEntity } from 'src/modules/users/entities/user.entity'
import { BasicEntity } from 'src/typeOrm/baseEntities/most-base-entities/base.entity'

@ObjectType()
@Entity('user-info')
export class UserInfoEntity extends BasicEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @OneToOne(() => UserEntity, (user) => user.info, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity

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
