import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import {
  CreateCommentForPhoto_I_G,
  SearchCommentForPhoto_I_G,
  UpdateCommentForPhoto_I_G,
} from '../dto/comment-for-photo/input.dto'
import { CommentForPhotoEntity_G } from '../entities/comment-for-photo_g.entity'

import { CommentForPhotoService_DB_G } from '../services/comment-for-photo-service'

@Resolver(() => CommentForPhotoEntity_G)
export class Comment_F_Photo_Resolver_G {
  constructor(
    private readonly commentForPhotoService: CommentForPhotoService_DB_G,
  ) {}

  @Mutation(() => CommentForPhotoEntity_G)
  createCommentForPhotoEntity_G(
    @Args('createCommentInput') createCommentInput: CreateCommentForPhoto_I_G,
  ) {
    return this.commentForPhotoService.create(createCommentInput)
  }

  @Query(() => [CommentForPhotoEntity_G])
  async findAllCommentsForPhotoEntity_G(@Args('photoId') photoId: number) {
    return await this.commentForPhotoService.findAll(photoId, 'comment')
  }

  @Query(() => CommentForPhotoEntity_G)
  findOne(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchCommentForPhoto_I_G,
  ) {
    const { photoId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.findOne(photoId, commentId, 'comment')
  }

  @Mutation(() => CommentForPhotoEntity_G)
  updateCommentForPhotoEntity_G(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForPhoto_I_G,
  ) {
    const { commentId, photoId, ...update } = updateCommentInput
    return this.commentForPhotoService.updateOne(
      photoId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => CommentForPhotoEntity_G)
  removeCommentForPhotoEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchCommentForPhoto_I_G,
  ) {
    const { photoId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.removeOne(photoId, commentId, 'comment')
  }
}
