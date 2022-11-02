import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql'
import { BaseImageEntity } from 'src/BaseEntities/file-entities/imageBase'
import { UserEntity } from 'src/modules/user/entities/user.entity'


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
