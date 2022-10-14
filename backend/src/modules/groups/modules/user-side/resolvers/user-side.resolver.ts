import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UserSideService } from '../services/user-side.service'
import { UserSide } from '../entities/user-side.entity'
import { CreateUserSideInput } from '../dto/create-user-side.input'
import { UpdateUserSideInput } from '../dto/update-user-side.input'

@Resolver(() => UserSide)
export class UserSideResolver {
  constructor(private readonly userSideService: UserSideService) {}

  @Mutation(() => UserSide)
  createUserSide(
    @Args('createUserSideInput') createUserSideInput: CreateUserSideInput,
  ) {
    return this.userSideService.create(createUserSideInput)
  }

  @Query(() => [UserSide], { name: 'userSide' })
  findAll() {
    return this.userSideService.findAll()
  }

  @Query(() => UserSide, { name: 'userSide' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userSideService.findOne(id)
  }

  @Mutation(() => UserSide)
  updateUserSide(
    @Args('updateUserSideInput') updateUserSideInput: UpdateUserSideInput,
  ) {
    return this.userSideService.update(
      updateUserSideInput.id,
      updateUserSideInput,
    )
  }

  @Mutation(() => UserSide)
  removeUserSide(@Args('id', { type: () => Int }) id: number) {
    return this.userSideService.remove(id)
  }
}
