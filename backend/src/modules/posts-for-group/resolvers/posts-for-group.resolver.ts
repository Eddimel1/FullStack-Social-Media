import { PostEntity_G } from 'src/modules/posts-for-group/entities/posts-for-group.entity'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { FindOne_W_Owner_I } from 'src/sharedDtos/input.dto'
import { CreatePost_F_Group_I, UpdatePostForGroup_I } from '../dto/input'
import { PostsForGroupService } from '../services/posts-for-group.service'

import { FindAllGroupPosts_O } from '../dto/output'
import { Delete_Message_W_Owner } from 'src/sharedDtos/output.dto'

@Resolver(() => PostEntity_G)
export class PostsForGroupResolver {
  constructor(private readonly postsForGroupService: PostsForGroupService) {}

  @Mutation(() => PostEntity_G)
  createPostForGroup(
    @Args('createPostForGroup')
    createPostForGroupInput: CreatePost_F_Group_I,
  ) {
    return this.postsForGroupService.create(createPostForGroupInput)
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
