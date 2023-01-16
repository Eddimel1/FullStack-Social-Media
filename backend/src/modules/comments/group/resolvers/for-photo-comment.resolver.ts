import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import { findAll_Generic_O } from '../../../../global/globalDtos/output.dto'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { FindAllComment_F_Photo_G } from '../dto/comment-for-photo/output.dto'
import { CommentForPhoto_G } from '../entities/comment-for-photo_g.entity'

import { CommentForPhotoService_DB_G } from '../services/comment-for-photo-service'

@Resolver(() => CommentForPhoto_G)
export class Comment_F_Photo_Resolver_G {
  constructor(
    private readonly commentForPhotoService: CommentForPhotoService_DB_G,
  ) {}

  @Mutation(() => CommentForPhoto_G)
  createCommentForPhoto_G(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPhotoService.create(createCommentInput, userId)
  }

  @Query(() =>  FindAllComment_F_Photo_G)
  async findAllCommentsForPhoto_G(@Args('photoId') photoId: number) {
    return await this.commentForPhotoService.findAll(photoId, 'comment')
  }

  @Query(() => CommentForPhoto_G)
  findOne(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPhoto_G)
  updateCommentForPhoto_G(
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

  @Mutation(() => CommentForPhoto_G)
  removeCommentForPhoto_G(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.removeOne(ownerId, commentId, 'comment')
  }
}
