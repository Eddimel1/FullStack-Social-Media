import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'

import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForPost_G } from '../entities/comment-for-post_g.entity'

import { CommentForPostService_DB_G } from '../services/comment-for-post.service'

@Resolver(() => CommentForPost_G)
export class Comment_F_Post_Resolver_G {
  constructor(
    private readonly commentForPostService: CommentForPostService_DB_G,
  ) {}

  @Mutation(() => CommentForPost_G)
  createCommentForPost_G(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPostService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForPost_G])
  async findAllCommentsForPost_G(@Args('photoId') postId: number) {
    return await this.commentForPostService.findAll(postId, 'comment')
  }

  @Query(() => CommentForPost_G)
  findOneCommentForPost_G(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPost_G)
  updateCommentForPost_G(
    @Args('updateCommentInput') updateCommentInput: UpdateComment,
  ) {
    const { commentId, ownerId, ...update } = updateCommentInput
    return this.commentForPostService.updateOne(
      ownerId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => CommentForPost_G)
  removeCommentForPost_G(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.removeOne(ownerId, commentId, 'comment')
  }
}
