import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { DeleteRequest_O } from '../dto/output.dto'
import { GroupUserRequest } from '../entities/group-user-request.entity'
import { UserToGroupRequestService } from '../services/user-to-group-request.service'

//create guard to check whether user is owner of a group
@Resolver(() => GroupUserRequest)
export class UserToGroupRequestResolver {
  constructor(
    private readonly groupToUserRequestService: UserToGroupRequestService,
  ) {}

  //context is not needed group ownership will be validated in the guard
  @Mutation(() => GroupUserRequest)
  createUserToGroupRequest(
    @Args('groupId')
    groupId: number,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.groupToUserRequestService.createRequestToGroup(userId, groupId)
  }

  @Query(() => [GroupUserRequest])
  findAllRequestsToGroup(@Context() context) {
    const userId = context.req.user.id
    return this.groupToUserRequestService.findAllRequestsToGroup(userId)
  }

  @Query(() => GroupUserRequest)
  findOneRequestToGroup(
    @Args('groupId')
    groupId: number,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.groupToUserRequestService.findOneRequestToGroup(userId, groupId)
  }

  @Mutation(() => DeleteRequest_O)
  removeRequestToGroup(
    @Args('groupId')
    groupId: number,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.groupToUserRequestService.removeRequestToGroup(userId, groupId)
  }
}
