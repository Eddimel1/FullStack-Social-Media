import { ObjectType, Field } from '@nestjs/graphql'
import { rating } from 'src/global/GlobalTypes/db.types'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Group_User_Relation } from '../../../group-user-relationship/entities/group-user-relationship.entity'

@Entity('user-side')
@ObjectType()
export class UserSide_G {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: 0 })
  @Field({ defaultValue: 0 })
  rating: rating

  @Column({ default: 0 })
  @Field({ defaultValue: 0 })
  activity: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  wish: string

  @Field(() => Group_User_Relation)
  @OneToOne(() => Group_User_Relation, (relation) => relation.user_side, {
    cascade: true,
  })
  group_user_relation: Group_User_Relation
}
