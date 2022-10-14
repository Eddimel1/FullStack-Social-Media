import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { PostsForGroupService } from '../services/posts-for-group.service'
import { PostsForGroup } from '../entities/posts-for-group.entity'
import { CreatePostsForGroupInput } from './dto/create-posts-for-group.input'
import { UpdatePostsForGroupInput } from './dto/update-posts-for-group.input'

@Resolver(() => PostsForGroup)
export class PostsForGroupResolver {
  constructor(private readonly postsForGroupService: PostsForGroupService) {}

  @Mutation(() => PostsForGroup)
  createPostsForGroup(
    @Args('createPostsForGroupInput')
    createPostsForGroupInput: CreatePostsForGroupInput,
  ) {
    return this.postsForGroupService.create(createPostsForGroupInput)
  }

  @Query(() => [PostsForGroup], { name: 'postsForGroup' })
  findAll() {
    return this.postsForGroupService.findAll()
  }

  @Query(() => PostsForGroup, { name: 'postsForGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postsForGroupService.findOne(id)
  }

  @Mutation(() => PostsForGroup)
  updatePostsForGroup(
    @Args('updatePostsForGroupInput')
    updatePostsForGroupInput: UpdatePostsForGroupInput,
  ) {
    return this.postsForGroupService.update(
      updatePostsForGroupInput.id,
      updatePostsForGroupInput,
    )
  }

  @Mutation(() => PostsForGroup)
  removePostsForGroup(@Args('id', { type: () => Int }) id: number) {
    return this.postsForGroupService.remove(id)
  }
}
