import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class updateT {
  @Field()
  role: string
  @Field()
  blocked: boolean
}

@InputType()
export class CreateRelationShip_G {
  @Field()
  userId: number

  @Field()
  groupId: number
}

@InputType()
export class FindRelationShip_G {
  @Field()
  userId: number

  @Field()
  groupId: number
}

@InputType()
export class UpdateRelationShip_G {
  @Field()
  userId: number

  @Field()
  groupId: number

  @Field(() => updateT)
  update: updateT
}

@InputType()
export class UpdateRelationShip_SH {
  @Field()
  userId: number

  @Field()
  groupId: number

  @Field(() => updateT)
  update: updateT
}

@InputType()
export class UpdateRelationShip_U {
  @Field()
  groupId: number

  @Field(() => updateT)
  update: updateT
}
