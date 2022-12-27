import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { PostService } from '../services/post.service'
import { Post_U } from '../entities/post.entity'
import { CreatePostInput, UpdatePostInput } from '../dto/input.dto'
import { FindAllPosts_O } from '../dto/output.dto'
import { FindOne_W_Owner_I } from 'src/global/globalDtos/input.dto'
import { Delete_Message_W_Owner } from 'src/global/globalDtos/output.dto'

@Resolver(() => Post_U)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post_U)
  async createPost(
    @Context() context,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    const my_id = context.req.user.id
    return this.postService.create(my_id, createPostInput)
  }

  @Query(() => FindAllPosts_O)
  async findAllPosts(
    @Context() context,
    @Args('id', { nullable: true }) id: number,
  ) {
    const my_id = context.req.user.id
    return id
      ? await this.postService.findAll(id, 'posts')
      : await this.postService.findAll(my_id, 'posts')
  }

  @Query(() => Post_U)
  async findOnePost(
    @Context() context,
    @Args('findPost') findPost: FindOne_W_Owner_I,
  ) {
    const my_id = context.req.user.id
    return findPost.ownerId
      ? await this.postService.findOne(findPost.ownerId, findPost.id, 'post')
      : await this.postService.findOne(my_id, findPost.id, 'post')
  }

  @Mutation(() => Post_U)
  async updatePost(
    @Context() context,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    const my_id = context.req.user.id
    const { postId, ...update } = updatePostInput
    const user = await this.postService.updateOne(my_id, postId, update, 'post')
    console.log(user)
    return user
  }

  @Mutation(() => Delete_Message_W_Owner)
  async removePost(@Context() context, @Args('postId') postId: number) {
    const my_id = context.req.user.id
    return this.postService.removeOne(my_id, postId, 'post')
  }
}
