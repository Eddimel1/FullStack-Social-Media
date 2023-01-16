import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class findAll_O {
  @Field()
  totalCount: number
  @Field()
  portion: number
}

@ObjectType()
export class Delete_Message_W_Owner {
  @Field()
  ownerId: number
  @Field()
  id: number
  @Field()
  isSuccess: boolean
  @Field()
  type: string
}

@ObjectType()
export class Delete_Message_WO_Owner {
  @Field()
  id: number
  @Field()
  isSuccess: boolean
  @Field()
  type: string
}

ObjectType()
export class Sim_File_EN_Delete_O {
  @Field()
  id: number
  @Field()
  isSuccess: boolean
  @Field()
  type: string
}
export class File_EN_Delete_O {
  @Field()
  ownerId: number
  @Field()
  file_name: string
  @Field()
  isSuccess: boolean
  @Field()
  type: string
}

export class findAll_Generic_O<T> {
  items: T[]
  totalCount: number
  portion: number
  page: number
}
