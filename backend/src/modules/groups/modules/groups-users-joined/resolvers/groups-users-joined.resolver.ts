import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import {
  CreateGroupsUsersJoinedInput,
  UpdateGroupsUsersJoinedInput,
} from '../dto/input'
import { Groups_A_Users_Mediator_E } from '../entities/groups-users-joined.entity'
import { Groups_A_Users_Service } from '../services/groups-users-joined.service'

@Resolver(() => Groups_A_Users_Mediator_E)
export class GroupsUsersJoinedResolver {
  constructor(
    private readonly groupsUsersJoinedService: Groups_A_Users_Service,
  ) {}

//   @Mutation(() => Groups_A_Users_Mediator_E)
//   createGroupsUsersJoined(
//     @Args('createGroupsUsersJoinedInput')
//     createGroupsUsersJoinedInput: CreateGroupsUsersJoinedInput,
//   ) {
//     return this.groupsUsersJoinedService.create(createGroupsUsersJoinedInput)
//   }

//   @Query(() => [Groups_A_Users_Mediator_E], { name: 'groupsUsersJoined' })
//   findAll() {
//     return this.groupsUsersJoinedService.findAll()
//   }

//   @Query(() => Groups_A_Users_Mediator_E, { name: 'groupsUsersJoined' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.groupsUsersJoinedService.findOne(id)
//   }

//   @Mutation(() => Groups_A_Users_Mediator_E)
//   updateGroupsUsersJoined(
//     @Args('updateGroupsUsersJoinedInput')
//     updateGroupsUsersJoinedInput: UpdateGroupsUsersJoinedInput,
//   ) {
//     return this.groupsUsersJoinedService.update(
//       updateGroupsUsersJoinedInput.id,
//       updateGroupsUsersJoinedInput,
//     )
//   }

//   @Mutation(() => Groups_A_Users_Mediator_E)
//   removeGroupsUsersJoined(@Args('id', { type: () => Int }) id: number) {
//     return this.groupsUsersJoinedService.remove(id)
//   }
}
