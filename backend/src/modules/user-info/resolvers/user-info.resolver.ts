import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { UserInfoService } from '../services/user-info.service'
import { UserInfoEntity } from '../entities/user-info.entity'
import { CreateUserInfoInput, UpdateUserInfoInput } from '../dto/input.dto'


@Resolver(() => UserInfoEntity)
export class UserInfoResolver {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Mutation(() => UserInfoEntity)
  createUserInfo(
    @Context() context,
    @Args('createUserInfoInput') createUserInfoInput: CreateUserInfoInput,
  ) {
    console.log(context.req.user)
    const my_id = context.req.user.id

    return this.userInfoService.create({
      ...createUserInfoInput,
      ownerId: my_id,
    })
  }

  @Query(() => UserInfoEntity)
  async findOneUserInfo(
    @Context() context,
    @Args('id', { nullable: true }) user_id: number | null,
  ) {
    console.log(context.req.user)
    const my_id = context.req.user.id

    return user_id
      ? await this.userInfoService.findOne(user_id)
      : await this.userInfoService.findOne(my_id)
  }

  @Mutation(() => UserInfoEntity)
  updateUserInfo(
    @Context() context,
    @Args('updateUserInfoInput') updateUserInfoInput: UpdateUserInfoInput,
  ) {
    const my_id = context.req.user.id
    return this.userInfoService.update(my_id, updateUserInfoInput)
  }
}
