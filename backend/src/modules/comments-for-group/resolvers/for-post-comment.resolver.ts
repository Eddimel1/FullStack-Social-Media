import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CommentForPostEntity_U } from 'src/modules/comments-for-user/entities/comment-for-post.entity'
import {
  CreateCommentForPost_I_G,
  SearchCommentForPost_I_G,
  UpdateCommentForPost_I_G,
} from '../dto/comment-for-post/input.dto'
import { CommentForPostEntity_G } from '../entities/comment-for-post_g.entity'

import { CommentForPostService_DB_G } from '../services/comment-for-post.service'

@Resolver(() => CommentForPostEntity_G)
export class Comment_F_Post_Resolver_G {
  constructor(
    private readonly commentForPostService: CommentForPostService_DB_G,
  ) {}

  @Mutation(() => CommentForPostEntity_G)
  createCommentForPostEntity_G(
    @Args('createCommentInput') createCommentInput: CreateCommentForPost_I_G,
  ) {
    return this.commentForPostService.create(createCommentInput)
  }

  @Query(() => [CommentForPostEntity_G])
  async findAllCommentsForPostEntity_G(@Args('photoId') photoId: number) {
    return await this.commentForPostService.findAll(photoId, 'comment')
  }

  @Query(() => CommentForPostEntity_G)
  findOneCommentForPostEntity_G(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchCommentForPost_I_G,
  ) {
    const { postId, commentId } = searchAllCommentForPost
    return this.commentForPostService.findOne(postId, commentId, 'comment')
  }

  @Mutation(() => CommentForPostEntity_G)
  updateCommentForPostEntity_G(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForPost_I_G,
  ) {
    const { commentId, postId, ...update } = updateCommentInput
    return this.commentForPostService.updateOne(
      postId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => CommentForPostEntity_U)
  removeCommentForPostEntity_G(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchCommentForPost_I_G,
  ) {
    const { postId, commentId } = searchAllCommentForPost
    return this.commentForPostService.removeOne(postId, commentId, 'comment')
  }
}
