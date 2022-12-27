import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForPhoto_U } from '../entities/comment-for-photo.entity'

import { CommentForPhotoService_DB_U } from '../services/comment-for-photo-service'

@Resolver(() => CommentForPhoto_U)
export class Comment_F_Photo_Resolver_U {
  constructor(
    private readonly commentForPhotoService: CommentForPhotoService_DB_U,
  ) {}

  @Mutation(() => CommentForPhoto_U)
  createCommentForPhoto_U(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPhotoService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForPhoto_U])
  async findAllCommentsForPhoto_U(@Args('photoId') photoId: number) {
    return await this.commentForPhotoService.findAll(photoId, 'comments')
  }

  @Query(() => CommentForPhoto_U)
  findOneCommentForPhoto_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPhoto_U)
  updateCommentForPhoto_U(
    @Args('updateCommentInput') updateCommentInput: UpdateComment,
  ) {
    const { commentId, ownerId, ...text } = updateCommentInput
    return this.commentForPhotoService.updateOne(
      ownerId,
      commentId,
      text,
      'comment',
    )
  }

  @Mutation(() => CommentForPhoto_U)
  removeCommentForPhoto_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.removeOne(ownerId, commentId, 'comment')
  }
}
