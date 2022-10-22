import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Group_User_Relation } from '../../group-user-relationship/entities/group-user-relationship.entity'

@Entity('group_user_shared_side')
@ObjectType()
export class GroupUserSharedSide {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  user_recommendation: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  group_recommendation: string

  @Field(() => Group_User_Relation)
  @OneToOne(() => Group_User_Relation, (relation) => relation.shared_side, {
    cascade: true,
  })
  group_user_relation: Group_User_Relation
}
