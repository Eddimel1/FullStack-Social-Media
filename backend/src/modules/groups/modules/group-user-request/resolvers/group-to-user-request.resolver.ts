import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { GroupToUserRequestService } from '../services/group-to-user-request.service'
import { GroupUserRequest } from '../entities/group-user-request.entity'
import { CreateRequest_G, FindRequest_G } from '../dto/input.dto'
import { DeleteRequest_O } from '../dto/output.dto'

//create guard to check whether user is owner of a group
@Resolver(() => GroupUserRequest)
export class GroupToUserRequestResolver {
  constructor(
    private readonly groupToUserRequestService: GroupToUserRequestService,
  ) {}

  //context is not needed group ownership will be validated in the guard
  @Mutation(() => GroupUserRequest)
  createGroupToUserRequest(
    @Args('createGroupToUserRequest')
    createGroupToUserRequest: CreateRequest_G,
  ) {
    return this.groupToUserRequestService.createRequestToUser(
      createGroupToUserRequest,
    )
  }

  @Query(() => [GroupUserRequest])
  findAllRequestsToUser(
    @Args('groupId')
    groupId: number,
  ) {
    return this.groupToUserRequestService.findAllRequestsToUser(groupId)
  }

  @Query(() => GroupUserRequest)
  findOneRequestToUser(
    @Args('findGroupToUserRequest')
    findGroupToUserRequest: FindRequest_G,
  ) {
    return this.groupToUserRequestService.findOneRequestToUser(
      findGroupToUserRequest,
    )
  }

  @Mutation(() => DeleteRequest_O)
  removeRequestToUser(
    @Args('findGroupToUserRequest')
    findGroupToUserRequest: FindRequest_G,
  ) {
    return this.groupToUserRequestService.removeRequestToUser(
      findGroupToUserRequest,
    )
  }
}
