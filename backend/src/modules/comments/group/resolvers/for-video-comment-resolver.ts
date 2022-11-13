import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql'
import {
  CreateComment,
  SearchComment,
  UpdateComment,
} from '../../shared/dto/input.dto'

import { CommentForVideoEntity_G } from '../entities/comment-for-video_g.entity'

import { CommentForVideoService_DB_G } from '../services/comment-for-video.service'

@Resolver(() => CommentForVideoEntity_G)
export class Comment_F_Video_Resolver_G {
  constructor(
    private readonly commentForVideoService: CommentForVideoService_DB_G,
  ) {}

  @Mutation(() => CommentForVideoEntity_G)
  async createCommentForVideoEntity_G(
    @Args('createCommentInput') createCommentInput: CreateComment,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return await this.commentForVideoService.create(createCommentInput, userId)
  }

  @Query(() => [CommentForVideoEntity_G])
  async findAllCommentsForVideoEntity_G(@Args('videoId') videoId: number) {
    return await this.commentForVideoService.findAll(videoId, 'comment')
  }

  @Query(() => CommentForVideoEntity_G)
  async findOneCommentForVideoEntity_G(
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

  @Mutation(() => CommentForVideoEntity_G)
  async updateCommentForVideoEntity_G(
    @Args('updateCommentInput') updateCommentInput: UpdateComment,
  ) {
    const { commentId, ownerId, ...update } = updateCommentInput
    return await this.commentForVideoService.updateOne(
      ownerId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => CommentForVideoEntity_G)
  async removeCommentForVideoEntity_G(
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
