import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UsersSharedService } from '../services/users-shared.service'
import { UsersShared } from '../entities/users-shared.entity'
import { CreateUsersSharedInput } from '../dto/create-users-shared.input'
import { UpdateUsersSharedInput } from '../dto/update-users-shared.input'

@Resolver(() => UsersShared)
export class UsersSharedResolver {
  constructor(private readonly usersSharedService: UsersSharedService) {}

  @Mutation(() => UsersShared)
  createUsersShared(
    @Args('createUsersSharedInput')
    createUsersSharedInput: CreateUsersSharedInput,
  ) {
    return this.usersSharedService.create(createUsersSharedInput)
  }

  @Query(() => [UsersShared], { name: 'usersShared' })
  findAll() {
    return this.usersSharedService.findAll()
  }

  @Query(() => UsersShared, { name: 'usersShared' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersSharedService.findOne(id)
  }

  @Mutation(() => UsersShared)
  updateUsersShared(
    @Args('updateUsersSharedInput')
    updateUsersSharedInput: UpdateUsersSharedInput,
  ) {
    return this.usersSharedService.update(
      updateUsersSharedInput.id,
      updateUsersSharedInput,
    )
  }

  @Mutation(() => UsersShared)
  removeUsersShared(@Args('id', { type: () => Int }) id: number) {
    return this.usersSharedService.remove(id)
  }
}
