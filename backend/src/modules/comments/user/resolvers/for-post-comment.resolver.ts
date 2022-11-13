import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForPostEntity_U } from '../entities/comment-for-post.entity'
import { CommentForPostService_DB_U } from '../services/comment-for-post.service'

@Resolver(() => CommentForPostEntity_U)
export class Comment_F_Post_Resolver_U {
  constructor(
    private readonly commentForPostService: CommentForPostService_DB_U,
  ) {}

  @Mutation(() => CommentForPostEntity_U)
  createCommentForPostEntity_U(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPostService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForPostEntity_U])
  async findAllCommentsForPostEntity_U(@Args('photoId') photoId: number) {
    return await this.commentForPostService.findAll(photoId, 'comments')
  }

  @Query(() => CommentForPostEntity_U)
  findOneCommentForPostEntity_U(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPostEntity_U)
  updateCommentForPostEntity_U(
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

  @Mutation(() => CommentForPostEntity_U)
  removeCommentForPostEntity_U(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPost
    return this.commentForPostService.removeOne(ownerId, commentId, 'comment')
  }
}
