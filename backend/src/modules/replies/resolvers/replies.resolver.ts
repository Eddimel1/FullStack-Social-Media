import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { RepliesService } from '../services/replies.service'
import { Reply } from '../entities/reply.entity'
import { CreateReplyInput, UpdateReplyInput } from '../dto/input.dto'


@Resolver(() => Reply)
export class RepliesResolver {
  constructor(private readonly repliesService: RepliesService) {}

  @Mutation(() => Reply)
  createReply(@Args('createReplyInput') createReplyInput: CreateReplyInput) {
    return this.repliesService.create(createReplyInput)
  }

  @Query(() => [Reply], { name: 'replies' })
  findAll() {
    return this.repliesService.findAll()
  }

  @Query(() => Reply, { name: 'reply' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.repliesService.findOne(id)
  }

  @Mutation(() => Reply)
  updateReply(@Args('updateReplyInput') updateReplyInput: UpdateReplyInput) {
    return this.repliesService.update(updateReplyInput.id, updateReplyInput)
  }

  @Mutation(() => Reply)
  removeReply(@Args('id', { type: () => Int }) id: number) {
    return this.repliesService.remove(id)
  }
}
