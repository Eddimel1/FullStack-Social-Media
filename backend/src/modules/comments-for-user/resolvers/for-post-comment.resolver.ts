import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import {
  CreateCommentForPost_I_U,
  SearchCommentForPost_I_U,
  UpdateCommentForPost_I_U,
} from '../dto/comment-for-post/input.dto'
import { CommentForPostEntity_U } from '../entities/comment-for-post.entity'
import { CommentForPostService_DB_U } from '../services/comment-for-post.service'

@Resolver(() => CommentForPostEntity_U)
export class Comment_F_Post_Resolver_U {
  constructor(
    private readonly commentForPostService: CommentForPostService_DB_U,
  ) {}

  @Mutation(() => CommentForPostEntity_U)
  createCommentForPostEntity_U(
    @Args('createCommentInput') createCommentInput: CreateCommentForPost_I_U,
  ) {
    return this.commentForPostService.create(createCommentInput)
  }

  @Query(() => [CommentForPostEntity_U])
  async findAllCommentsForPostEntity_U(@Args('photoId') photoId: number) {
    return await this.commentForPostService.findAll(photoId, 'comments')
  }

  @Query(() => CommentForPostEntity_U)
  findOneCommentForPostEntity_U(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchCommentForPost_I_U,
  ) {
    const { postId, commentId } = searchAllCommentForPost
    return this.commentForPostService.findOne(postId, commentId, 'comment')
  }

  @Mutation(() => CommentForPostEntity_U)
  updateCommentForPostEntity_U(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForPost_I_U,
  ) {
    const { commentId, postId, ...text } = updateCommentInput
    return this.commentForPostService.updateOne(
      postId,
      commentId,
      text,
      'comment',
    )
  }

  @Mutation(() => CommentForPostEntity_U)
  removeCommentForPostEntity_U(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchCommentForPost_I_U,
  ) {
    const { postId, commentId } = searchAllCommentForPost
    return this.commentForPostService.removeOne(postId, commentId, 'comment')
  }
}
