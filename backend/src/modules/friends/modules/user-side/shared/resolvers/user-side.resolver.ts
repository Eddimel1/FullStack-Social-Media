import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { User1SideService } from '../../user1-side/services/user1-side.service'
import { User2SideService } from '../../user2-side/services/user2-side.service'
import { CreateUserSide, UpdateUserSide } from '../dto/input.dto'
import { UserSide } from '../entities/user-side.entity'

@Resolver(() => UserSide)
export class UserSideResolver {
  constructor(
    private readonly user1SideService: User1SideService,
    private readonly user2SideService: User2SideService,
  ) {}

  @Mutation(() => UserSide)
  createUser2Side(
    @Args('createUser2SideInput') createUser2SideInput: CreateUserSide,
  ) {
    return this.user2SideService.create(createUser2SideInput)
  }

  @Query(() => [UserSide])
  findAll() {
    return this.user2SideService.findAll()
  }

  @Query(() => UserSide)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.user2SideService.findOne(id)
  }

  @Mutation(() => UserSide)
  updateUser2Side(
    @Args('updateUser2SideInput') updateUser2SideInput: UpdateUserSide,
  ) {
    return this.user2SideService.update(
      updateUser2SideInput.id,
      updateUser2SideInput,
    )
  }

  @Mutation(() => UserSide)
  removeUser2Side(@Args('id', { type: () => Int }) id: number) {
    return this.user2SideService.remove(id)
  }
}
