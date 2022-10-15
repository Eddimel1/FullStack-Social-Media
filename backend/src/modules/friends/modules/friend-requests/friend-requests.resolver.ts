import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { FriendRequestsService } from './friend-requests.service'
import { FriendRequest } from './entities/friend-request.entity'
import { CreateRequest } from './dto/input.dto'

@Resolver(() => FriendRequest)
export class FriendRequestsResolver {
  constructor(private readonly friendRequestsService: FriendRequestsService) {}

  @Mutation(() => FriendRequest)
  create(
    @Args('createFriendRequestInput') createFriendRequestInput: CreateRequest,
  ) {
    return this.friendRequestsService.create(createFriendRequestInput)
  }

  @Query(() => [FriendRequest], { name: 'friendRequests' })
  findAll() {
    return this.friendRequestsService.findAll()
  }

  @Query(() => FriendRequest, { name: 'friendRequest' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.friendRequestsService.findOne(id)
  }

  @Mutation(() => FriendRequest)
  remove(@Args('id', { type: () => Int }) id: number) {
    return this.friendRequestsService.remove(id)
  }
}
