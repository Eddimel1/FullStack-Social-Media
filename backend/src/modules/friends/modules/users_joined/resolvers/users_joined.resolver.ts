import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UsersJoinedService } from '../services/users_joined.service'
import { UsersJoined } from '../entities/users_joined.entity'
import {
  CreateUsersJoinedInput,
  UpdateUsersJoinedInput,
} from '../dto/input.dto'

@Resolver(() => UsersJoined)
export class UsersJoinedResolver {
  constructor(private readonly usersJoinedService: UsersJoinedService) {}

  @Mutation(() => UsersJoined)
  createUsersJoined(
    @Args('createUsersJoinedInput')
    createUsersJoinedInput: CreateUsersJoinedInput,
  ) {
    return this.usersJoinedService.create(createUsersJoinedInput)
  }

  @Query(() => [UsersJoined], { name: 'usersJoined' })
  findAll() {
    return this.usersJoinedService.findAll()
  }

  @Query(() => UsersJoined, { name: 'usersJoined' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersJoinedService.findOne(id)
  }

  @Mutation(() => UsersJoined)
  updateUsersJoined(
    @Args('updateUsersJoinedInput')
    updateUsersJoinedInput: UpdateUsersJoinedInput,
  ) {
    return this.usersJoinedService.update(
      updateUsersJoinedInput.id,
      updateUsersJoinedInput,
    )
  }

  @Mutation(() => UsersJoined)
  removeUsersJoined(@Args('id', { type: () => Int }) id: number) {
    return this.usersJoinedService.remove(id)
  }
}
