import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { SharedSideService } from '../services/shared-side.service'
import { SharedSide } from '../entities/shared-side.entity'
import { CreateSharedSideInput } from '../dto/create-shared-side.input'
import { UpdateSharedSideInput } from '../dto/update-shared-side.input'

@Resolver(() => SharedSide)
export class SharedSideResolver {
  constructor(private readonly sharedSideService: SharedSideService) {}

  @Mutation(() => SharedSide)
  createSharedSide(
    @Args('createSharedSideInput') createSharedSideInput: CreateSharedSideInput,
  ) {
    return this.sharedSideService.create(createSharedSideInput)
  }

  @Query(() => [SharedSide], { name: 'sharedSide' })
  findAll() {
    return this.sharedSideService.findAll()
  }

  @Query(() => SharedSide, { name: 'sharedSide' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sharedSideService.findOne(id)
  }

  @Mutation(() => SharedSide)
  updateSharedSide(
    @Args('updateSharedSideInput') updateSharedSideInput: UpdateSharedSideInput,
  ) {
    return this.sharedSideService.update(
      updateSharedSideInput.id,
      updateSharedSideInput,
    )
  }

  @Mutation(() => SharedSide)
  removeSharedSide(@Args('id', { type: () => Int }) id: number) {
    return this.sharedSideService.remove(id)
  }
}
