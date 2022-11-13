import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
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
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.commentForPhotoService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForPhotoEntity_U])
  async findAllCommentsForPhotoEntity_U(@Args('photoId') photoId: number) {
    return await this.commentForPhotoService.findAll(photoId, 'comments')
  }

  @Query(() => CommentForPostEntity_U)
  findOneCommentForPhotoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.findOne(ownerId, commentId, 'comment')
  }

  @Mutation(() => CommentForPhotoEntity_U)
  updateCommentForPhotoEntity_U(
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

  @Mutation(() => CommentForPhotoEntity_U)
  removeCommentForPhotoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForPhoto: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForPhoto
    return this.commentForPhotoService.removeOne(ownerId, commentId, 'comment')
  }
}
