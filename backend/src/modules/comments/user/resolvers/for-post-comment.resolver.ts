import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForPost_U } from '../entities/comment-for-post.entity'
import { CommentForPostService_DB_U } from '../services/comment-for-post.service'

@Resolver(() => CommentForPost_U)
export class Comment_F_Post_Resolver_U {
  constructor(
    private readonly commentForPostService: CommentForPostService_DB_U,
  ) {}

  @Mutation(() => CommentForPost_U)
  createCommentForPost_U(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPostService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForPost_U])
  async findAllCommentsForPostEntity_U(@Args('photoId') photoId: number) {
    return await this.commentForPostService.findAll(photoId, 'comments')
  }

  @Query(() => CommentForPost_U)
  findOneCommentForPost_U(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPost_U)
  updateCommentForPost_U(
    @Args('updateCommentInput') updateCommentInput: UpdateComment,
  ) {
    const { commentId, ownerId, ...text } = updateCommentInput
    return this.commentForPostService.updateOne(
      ownerId,
      commentId,
      text,
      'comment',
    )
  }

  @Mutation(() => CommentForPost_U)
  removeCommentForPost_U(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.removeOne(ownerId, commentId, 'comment')
  }
}
