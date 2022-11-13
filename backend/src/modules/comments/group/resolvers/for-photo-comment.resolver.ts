import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForPhotoEntity_G } from '../entities/comment-for-photo_g.entity'

import { CommentForPhotoService_DB_G } from '../services/comment-for-photo-service'

@Resolver(() => CommentForPhotoEntity_G)
export class Comment_F_Photo_Resolver_G {
  constructor(
    private readonly commentForPhotoService: CommentForPhotoService_DB_G,
  ) {}

  @Mutation(() => CommentForPhotoEntity_G)
  createCommentForPhotoEntity_G(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPhotoService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForPhotoEntity_G])
  async findAllCommentsForPhotoEntity_G(@Args('photoId') photoId: number) {
    return await this.commentForPhotoService.findAll(photoId, 'comment')
  }

  @Query(() => CommentForPhotoEntity_G)
  findOne(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPhotoEntity_G)
  updateCommentForPhotoEntity_G(
    @Args('updateCommentInput') updateCommentInput: UpdateComment,
  ) {
    const { commentId, ownerId, ...update } = updateCommentInput
    return this.commentForPhotoService.updateOne(
      ownerId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => CommentForPhotoEntity_G)
  removeCommentForPhotoEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.removeOne(ownerId, commentId, 'comment')
  }
}
