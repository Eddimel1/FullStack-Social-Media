import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/typeOrm/baseEntities/file-entities/imageBase'
import { UserEntity } from 'src/modules/users/entities/user.entity'

@ObjectType()
@Entity('avatar_u')
export class U_Avatar_EN extends BaseImageEntity {
  @Column()
  ownerId: number
  @Field(() => UserEntity)
  @OneToOne(() => UserEntity, (user) => user.avatar, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner: UserEntity
}
