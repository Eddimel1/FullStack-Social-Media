import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql/dist/decorators/object-type.decorator'

@ObjectType()
export class UpdateGroupInfo_O {
  @Field({ nullable: true })
  description: string

  @Field({ nullable: true })
  status: string
}

@ObjectType()
export class isSuccess_O {
  @Field()
  groupId: string

  @Field()
  isSuccess: boolean
}
