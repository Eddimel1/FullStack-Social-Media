import { ObjectType, Field } from '@nestjs/graphql'
import { Entity, PrimaryColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { GroupUserSharedSide } from '../../shared-side/entities/shared-side.entity'
import { GroupSidePrivate } from '../../sides/group-side-private/entities/group-side-private.entity'
import { GroupSide } from '../../sides/group-side/entities/group-side.entity'
import { UserSidePrivate } from '../../sides/user-side-private/entities/user-side-private.entity'
import { UserSide_G } from '../../sides/user-side/entities/user-side.entity'
import { GroupEntity } from '../../groups/entities/group.entity'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@Entity('group_user_relation')
@ObjectType()
export class Group_User_Relation {
  @PrimaryColumn()
  group_id: number

  @PrimaryColumn()
  user_id: number

  @PrimaryColumn()
  group_side_id: number

  @PrimaryColumn()
  user_side_id: number

  @PrimaryColumn()
  group_side_private_id: number

  @PrimaryColumn()
  user_side_private_id: number

  @PrimaryColumn()
  shared_side_id: number

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity

  @Field(() => GroupEntity)
  @ManyToOne(() => GroupEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'group_id' })
  group: GroupEntity

  @Field(() => GroupSide)
  @OneToOne(() => GroupSide, (group_side) => group_side.group_user_relation, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'group_side_id' })
  group_side: GroupSide

  @Field(() => UserSide_G)
  @OneToOne(() => UserSide_G, (user_side) => user_side.group_user_relation, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_side_id' })
  user_side: UserSide_G

  @Field(() => UserSidePrivate)
  @OneToOne(
    () => UserSidePrivate,
    (user_side_private) => user_side_private.group_user_relation,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'user_side_private_id' })
  user_side_private: UserSidePrivate

  @Field(() => GroupSidePrivate)
  @OneToOne(
    () => GroupSidePrivate,
    (group_side_private) => group_side_private.group_user_relation,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'group_side_private_id' })
  group_side_private: GroupSidePrivate

  @Field(() => GroupUserSharedSide)
  @OneToOne(
    () => GroupUserSharedSide,
    (shared_side) => shared_side.group_user_relation,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'shared_side_id' })
  shared_side: GroupUserSharedSide
}
