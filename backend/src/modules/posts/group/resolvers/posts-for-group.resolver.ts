import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { CreatePost_F_Group_I, UpdatePostForGroup_I } from '../dto/input'
import { PostsForGroupService } from '../services/posts-for-group.service'

import { FindAllGroupPosts_O } from '../dto/output'
import { FindOne_W_Owner_I } from 'src/global/globalDtos/input.dto'
import { Delete_Message_W_Owner } from 'src/global/globalDtos/output.dto'
import { PostEntity_G } from '../entities/posts-for-group.entity'

@Resolver(() => PostEntity_G)
export class PostsForGroupResolver {
  constructor(private readonly postsForGroupService: PostsForGroupService) {}

  @Mutation(() => PostEntity_G)
  createPostForGroup(
    @Args('createPostForGroup')
    createPostForGroupInput: CreatePost_F_Group_I,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.postsForGroupService.create(createPostForGroupInput, userId)
  }

  @Query(() => FindAllGroupPosts_O)
  findAllGroupPosts(@Args('groupId') groupId: number) {
    return this.postsForGroupService.findAll(groupId, 'group')
  }

  @Query(() => PostEntity_G)
  findOneGroupPost(@Args('findGroupPost') findGroupPost: FindOne_W_Owner_I) {
    return this.postsForGroupService.findOne(
      findGroupPost.ownerId,
      findGroupPost.id,
      'group_post',
    )
  }

  @Mutation(() => PostEntity_G)
  updatePostForGroup(
    @Args('updatePostsForGroupInput')
    updatePostForGroup: UpdatePostForGroup_I,
  ) {
    const { findOne, ...update } = updatePostForGroup
    return this.postsForGroupService.updateOne(
      findOne.ownerId,
      findOne.id,
      update,
      'group_post',
    )
  }

  @Mutation(() => Delete_Message_W_Owner)
  removePostForGroup(
    @Args('removeGroupPost') removeGroupPost: FindOne_W_Owner_I,
  ) {
    const { ownerId, id } = removeGroupPost
    return this.postsForGroupService.removeOne(ownerId, id, 'group_post')
  }
}
