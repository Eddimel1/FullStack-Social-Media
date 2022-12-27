import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForVideo_U } from '../entities/comment-for-video.entity'
import { CommentForVideoService_DB_U } from '../services/comment-for-video.service'

@Resolver(() => CommentForVideo_U)
export class Comment_F_Video_Resolver_U {
  constructor(
    private readonly commentForVideoService: CommentForVideoService_DB_U,
  ) {}

  @Mutation(() => CommentForVideo_U)
  async createCommentForVideo_U(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return await this.commentForVideoService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForVideo_U])
  async findAllCommentsForVideoEntity_U(@Args('photoId') videoId: number) {
    return await this.commentForVideoService.findAll(videoId, 'comments')
  }

  @Query(() => CommentForVideo_U)
  async findOneCommentForVideo_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.findOne(
      ownerId,
      commentId,
      'comment',
    )
  }

  @Mutation(() => CommentForVideo_U)
  async updateCommentForVideo_U(
    @Args('updateCommentInput') updateCommentInput: UpdateComment,
  ) {
    const { commentId, ownerId, ...text } = updateCommentInput
    return await this.commentForVideoService.updateOne(
      ownerId,
      commentId,
      text,
      'comment',
    )
  }

  @Mutation(() => CommentForVideo_U)
  async removeCommentForVideo_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchComment,
  ) {
    const { ownerId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.removeOne(
      ownerId,
      commentId,
      'comment',
    )
  }
}
