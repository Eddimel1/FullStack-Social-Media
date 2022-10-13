import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroupsService } from './groups.service';
import { GroupEntity } from './entities/group.entity';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';

@Resolver(() => GroupEntity)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation(() => GroupEntity)
  createGroup(@Args('createGroupInput') createGroupInput: CreateGroupInput) {
    return this.groupsService.create(createGroupInput)
  }

  @Query(() => [GroupEntity], { name: 'groups' })
  findAll() {
    return this.groupsService.findAll()
  }

  @Query(() => GroupEntity, { name: 'group' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.findOne(id)
  }

  @Mutation(() => GroupEntity)
  updateGroup(@Args('updateGroupInput') updateGroupInput: UpdateGroupInput) {
    return this.groupsService.update(updateGroupInput.id, updateGroupInput);
  }

  @Mutation(() => GroupEntity)
  removeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.remove(id)
  }
}
