import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import {
  CreateCommentForPhoto_I_U,
  SearchCommentForPhoto_I_U,
  UpdateCommentForPhoto_I_U,
} from '../dto/comment-for-photo/input.dto'

import { CommentForPhotoEntity_U } from '../entities/comment-for-photo.entity'
import { CommentForPostEntity_U } from '../entities/comment-for-post.entity'
import { CommentForPhotoService_DB_U } from '../services/comment-for-photo-service'

@Resolver(() => CommentForPhotoEntity_U)
export class Comment_F_Photo_Resolver_U {
  constructor(
    private readonly commentForPhotoService: CommentForPhotoService_DB_U,
  ) {}

  @Mutation(() => CommentForPhotoEntity_U)
  createCommentForPhotoEntity_U(
    @Args('createCommentInput') createCommentInput: CreateCommentForPhoto_I_U,
  ) {
    return this.commentForPhotoService.create(createCommentInput)
  }

  @Query(() => [CommentForPhotoEntity_U])
  async findAllCommentsForPhotoEntity_U(@Args('photoId') photoId: number) {
    return await this.commentForPhotoService.findAll(photoId, 'comments')
  }

  @Query(() => CommentForPostEntity_U)
  findOneCommentForPhotoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchCommentForPhoto_I_U,
  ) {
    const { photoId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.findOne(photoId, commentId, 'comment')
  }

  @Mutation(() => CommentForPhotoEntity_U)
  updateCommentForPhotoEntity_U(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForPhoto_I_U,
  ) {
    const { commentId, photoId, ...text } = updateCommentInput
    return this.commentForPhotoService.updateOne(
      photoId,
      commentId,
      text,
      'comment',
    )
  }

  @Mutation(() => CommentForPhotoEntity_U)
  removeCommentForPhotoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchCommentForPhoto_I_U,
  ) {
    const { photoId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.removeOne(photoId, commentId, 'comment')
  }
}
