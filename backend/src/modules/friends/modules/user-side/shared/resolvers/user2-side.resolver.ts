import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { User2SideService } from '../../user2-side/services/user2-side.service'
import { User2Side } from '../entities/user2-side.entity'
import { CreateUser2SideInput } from './dto/create-user2-side.input'
import { UpdateUser2SideInput } from './dto/update-user2-side.input'

@Resolver(() => User2Side)
export class User2SideResolver {
  constructor(private readonly user2SideService: User2SideService) {}

  @Mutation(() => User2Side)
  createUser2Side(
    @Args('createUser2SideInput') createUser2SideInput: CreateUser2SideInput,
  ) {
    return this.user2SideService.create(createUser2SideInput)
  }

  @Query(() => [User2Side], { name: 'user2Side' })
  findAll() {
    return this.user2SideService.findAll()
  }

  @Query(() => User2Side, { name: 'user2Side' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.user2SideService.findOne(id)
  }

  @Mutation(() => User2Side)
  updateUser2Side(
    @Args('updateUser2SideInput') updateUser2SideInput: UpdateUser2SideInput,
  ) {
    return this.user2SideService.update(
      updateUser2SideInput.id,
      updateUser2SideInput,
    )
  }

  @Mutation(() => User2Side)
  removeUser2Side(@Args('id', { type: () => Int }) id: number) {
    return this.user2SideService.remove(id)
  }
}
