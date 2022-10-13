
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import {
  CreateCommentForPost_I,
  SearchCommentForPost_I,
  UpdateCommentForPost_I,
} from '../dto/comment-for-post/input.dto'
import { CommentForPostEntity } from '../entities/comment-for-post.entity'
import { CommentForPostService_DB } from '../services/comment-for-post.service'


@Resolver(() => CommentForPostEntity)
export class Comment_F_Post_Resolver {
  constructor(
    private readonly commentForPostService: CommentForPostService_DB,
  ) {}

  @Mutation(() => CommentForPostEntity)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentForPost_I,
  ) {
    return this.commentForPostService.create(createCommentInput)
  }

  @Query(() => [CommentForPostEntity])
  async findAll(@Args('photoId') photoId: number) {
    return await this.commentForPostService.findAll(photoId)
  }

  @Query(() => CommentForPostEntity)
  findOne(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchCommentForPost_I,
  ) {
    const { postId, commentId } = searchAllCommentForPost
    return this.commentForPostService.findOne(postId, commentId)
  }

  @Mutation(() => CommentForPostEntity)
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForPost_I,
  ) {
    return this.commentForPostService.update(
      updateCommentInput.postId,
      updateCommentInput,
    )
  }

  @Mutation(() => CommentForPostEntity)
  removeComment(
    @Args('searchAllCommentForPost')
    searchAllCommentForPost: SearchCommentForPost_I,
  ) {
    const { postId, commentId } = searchAllCommentForPost
    return this.commentForPostService.remove(postId, commentId)
  }
}
