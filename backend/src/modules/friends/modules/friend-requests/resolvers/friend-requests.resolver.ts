import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { FriendRequestsService } from '../services/friend-requests.service'
import { FriendRequest } from '../entities/friend-request.entity'
import { CreatedRequest_O, FindAndCountRequests_O } from '../dto/output.dto'

@Resolver(() => FriendRequest)
export class FriendRequestsResolver {
  constructor(private readonly friendRequestsService: FriendRequestsService) {}

  @Mutation(() => CreatedRequest_O)
  createRequest(@Args('accepter_id') accepter_id: number, @Context() context) {
    const requester_id = context.req.user.id
    return this.friendRequestsService.createRequest(requester_id, accepter_id)
  }

  @Query(() => FindAndCountRequests_O)
  findAllMyRequests(@Context() context) {
    const requester_id = context.req.user.id
    return this.friendRequestsService.findAllMyRequests(requester_id)
  }

  @Query(() => FindAndCountRequests_O)
  findAllRequestsToMe(@Context() context) {
    const requester_id = context.req.user.id
    return this.friendRequestsService.findAllRequestsToMe(requester_id)
  }

  @Query(() => FriendRequest)
  findOneMyRequest(
    @Args('accepter_id') accepter_id: number,
    @Context() context,
  ) {
    const requester_id = context.req.user.id
    return this.friendRequestsService.findOneMyRequest(
      requester_id,
      accepter_id,
    )
  }

  @Query(() => FriendRequest)
  findOneRequestToMe(
    @Args('accepter_id') accepter_id: number,
    @Context() context,
  ) {
    const requester_id = context.req.user.id
    return this.friendRequestsService.findOneRequestToMe(
      requester_id,
      accepter_id,
    )
  }

  @Mutation(() => FriendRequest)
  removeMyRequest(
    @Args('accepter_id') accepter_id: number,
    @Context() context,
  ) {
    const requester_id = context.req.user.id
    return this.friendRequestsService.removeMyRequest(requester_id, accepter_id)
  }

  @Mutation(() => FriendRequest)
  declineRequest(@Args('accepter_id') accepter_id: number, @Context() context) {
    const requester_id = context.req.user.id
    console.log(requester_id)
    return this.friendRequestsService.declineRequest(requester_id, accepter_id)
  }

  @Mutation(() => FriendRequest)
  declineAllRequests(@Context() context) {
    const requester_id = context.req.user.id
    return this.friendRequestsService.declineAllRequests(requester_id)
  }
}
