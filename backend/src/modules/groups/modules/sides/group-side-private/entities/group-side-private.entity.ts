import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Group_User_Relation } from '../../../group-user-relationship/entities/group-user-relationship.entity'

@Entity('group-side-private')
@ObjectType()
export class GroupSidePrivate {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  user_characteristic: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  ban_reason: string

  //suspension-reason , suspension time


  @Field(() => Group_User_Relation)
  @OneToOne(
    () => Group_User_Relation,
    (relation) => relation.group_side_private,
    {
      cascade: true,
    },
  )
  group_user_relation: Group_User_Relation
}
