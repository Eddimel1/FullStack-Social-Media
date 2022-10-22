import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Group_User_Relation } from '../../../group-user-relationship/entities/group-user-relationship.entity'

@Entity('user-side-private')
@ObjectType()
export class UserSidePrivate {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: false })
  @Field({ defaultValue: false })
  favorite: boolean

  @Column({ nullable: true })
  @Field({ nullable: true })
  group_characteristic: string

  
  @Field(() => Group_User_Relation)
  @OneToOne(
    () => Group_User_Relation,
    (relation) => relation.user_side_private,
    {
      cascade: true,
    },
  )
  group_user_relation: Group_User_Relation
}
