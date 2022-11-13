import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import { CommentForPostEntity_U } from 'src/modules/comments/user/entities/comment-for-post.entity'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForPostEntity_G } from '../entities/comment-for-post_g.entity'

import { CommentForPostService_DB_G } from '../services/comment-for-post.service'

@Resolver(() => CommentForPostEntity_G)
export class Comment_F_Post_Resolver_G {
  constructor(
    private readonly commentForPostService: CommentForPostService_DB_G,
  ) {}

  @Mutation(() => CommentForPostEntity_G)
  createCommentForPostEntity_G(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPostService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForPostEntity_G])
  async findAllCommentsForPostEntity_G(@Args('photoId') postId: number) {
    return await this.commentForPostService.findAll(postId, 'comment')
  }

  @Query(() => CommentForPostEntity_G)
  findOneCommentForPostEntity_G(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPostEntity_G)
  updateCommentForPostEntity_G(
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

  @Mutation(() => CommentForPostEntity_U)
  removeCommentForPostEntity_G(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.removeOne(ownerId, commentId, 'comment')
  }
}
