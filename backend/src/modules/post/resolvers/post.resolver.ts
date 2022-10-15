import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { PostService } from '../services/post.service'
import { PostEntity } from '../entities/post.entity'

import { postRemove_O } from '../types/output'
import {
  CreatePostInput,
  FindPostInput,
  UpdatePostInput,
} from '../dto/input.dto'

@Resolver(() => PostEntity)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => PostEntity)
  async createPost(
    @Context() context,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    const my_id = context.req.user.id
    return this.postService.create(my_id, createPostInput)
  }

  @Query(() => [PostEntity])
  async findAllPosts(
    @Context() context,
    @Args('id', { nullable: true }) id: number,
  ) {
    const my_id = context.req.user.id
    return id
      ? await this.postService.findAll(id)
      : await this.postService.findAll(my_id)
  }

  @Query(() => PostEntity)
  async findOnePost(
    @Context() context,
    @Args('findPost') findPost: FindPostInput,
  ) {
    const my_id = context.req.user.id
    return findPost.userId
      ? await this.postService.findOne(findPost.userId, findPost.postId)
      : await this.postService.findOne(my_id, findPost.postId)
  }

  @Mutation(() => PostEntity)
  async updatePost(
    @Context() context,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    const my_id = context.req.user.id
    const user = await this.postService.update(my_id, updatePostInput)
    console.log(user)
    return user
  }

  @Mutation(() => postRemove_O)
  async removePost(@Context() context, @Args('postId') postId: number) {
    const my_id = context.req.user.id
    return this.postService.remove(my_id, postId)
  }
}
