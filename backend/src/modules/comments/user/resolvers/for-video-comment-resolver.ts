import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'
import { CommentForVideoEntity_U } from '../entities/comment-for-video.entity'
import { CommentForVideoService_DB_U } from '../services/comment-for-video.service'

@Resolver(() => CommentForVideoEntity_U)
export class Comment_F_Video_Resolver_U {
  constructor(
    private readonly commentForVideoService: CommentForVideoService_DB_U,
  ) {}

  @Mutation(() => CommentForVideoEntity_U)
  async createCommentForVideoEntity_U(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return await this.commentForVideoService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForVideoEntity_U])
  async findAllCommentsForVideoEntity_U(@Args('photoId') videoId: number) {
    return await this.commentForVideoService.findAll(videoId, 'comments')
  }

  @Query(() => CommentForVideoEntity_U)
  async findOneCommentForVideoEntity_U(
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

  @Mutation(() => CommentForVideoEntity_U)
  async updateCommentForVideoEntity_U(
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

  @Mutation(() => CommentForVideoEntity_U)
  async removeCommentForVideoEntity_U(
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
