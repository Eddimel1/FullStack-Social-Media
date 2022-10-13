import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import {
  CreateCommentForPhoto_I,
  SearchCommentForPhoto_I,
  UpdateCommentForPhoto_I,
} from '../dto/comment-for-photo/input.dto'

import { CommentForPhotoEntity } from '../entities/comment-for-photo.entity'
import { CommentForPostEntity } from '../entities/comment-for-post.entity'
import { CommentForPhotoService_DB } from '../services/comment-for-photo-service'

@Resolver(() => CommentForPhotoEntity)
export class Comment_F_Photo_Resolver {
  constructor(
    private readonly commentForPhotoService: CommentForPhotoService_DB,
  ) {}

  @Mutation(() => CommentForPhotoEntity)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentForPhoto_I,
  ) {
    return this.commentForPhotoService.create(createCommentInput)
  }

  @Query(() => [CommentForPhotoEntity])
  async findAll(@Args('photoId') photoId: number) {
    return await this.commentForPhotoService.findAll(photoId)
  }

  @Query(() => CommentForPostEntity)
  findOne(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchCommentForPhoto_I,
  ) {
    const { photoId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.findOne(photoId, commentId)
  }

  @Mutation(() => CommentForPhotoEntity)
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForPhoto_I,
  ) {
    return this.commentForPhotoService.update(
      updateCommentInput.photoId,
      updateCommentInput,
    )
  }

  @Mutation(() => CommentForPhotoEntity)
  removeComment(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchCommentForPhoto_I,
  ) {
    const { photoId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.remove(photoId, commentId)
  }
}
