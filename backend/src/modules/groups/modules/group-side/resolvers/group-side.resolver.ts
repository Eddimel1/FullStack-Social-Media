import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { GroupSideService } from '../services/group-side.service'
import { GroupSide } from '../entities/group-side.entity'
import { CreateGroupSideInput, UpdateGroupSideInput } from '../dto/input.dto'


@Resolver(() => GroupSide)
export class GroupSideResolver {
  constructor(private readonly groupSideService: GroupSideService) {}

  @Mutation(() => GroupSide)
  createGroupSide(
    @Args('createGroupSideInput') createGroupSideInput: CreateGroupSideInput,
  ) {
    return this.groupSideService.create(createGroupSideInput)
  }

  @Query(() => [GroupSide], { name: 'groupSide' })
  findAll() {
    return this.groupSideService.findAll()
  }

  @Query(() => GroupSide, { name: 'groupSide' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupSideService.findOne(id)
  }

  @Mutation(() => GroupSide)
  updateGroupSide(
    @Args('updateGroupSideInput') updateGroupSideInput: UpdateGroupSideInput,
  ) {
    return this.groupSideService.update(
      updateGroupSideInput.id,
      updateGroupSideInput,
    )
  }

  @Mutation(() => GroupSide)
  removeGroupSide(@Args('id', { type: () => Int }) id: number) {
    return this.groupSideService.remove(id)
  }
}
