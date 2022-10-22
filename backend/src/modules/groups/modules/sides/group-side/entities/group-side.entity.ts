import { ObjectType, Field } from '@nestjs/graphql'
import { group_roles } from 'src/GlobalTypes/user.types'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Group_User_Relation } from '../../../group-user-relationship/entities/group-user-relationship.entity'

@Entity('group-side')
@ObjectType()
export class GroupSide {
  @Field()
  @PrimaryGeneratedColumn()
  id: number


  @Column({ default: 'participant' })
  @Field({ defaultValue: 'participant' })
  role: group_roles

  @Column({ nullable: true, default: false })
  @Field({ defaultValue: false })
  blocked: boolean

  @Column({ default: 0})
  @Field({ defaultValue: 0 })
  warnings: number

//warnings
//reason
//user-activity

  @Field(() => Group_User_Relation)
  @OneToOne(() => Group_User_Relation, (relation) => relation.group_side, {
    cascade: true,
  })
  group_user_relation: Group_User_Relation
}
