import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'

import {
  CreateCommentForVideo_I_G,
  SearchCommentForVideo_I_G,
  UpdateCommentForVideo_I_G,
} from '../dto/comment-for-video/input.dto'
import { CommentForVideoEntity_G } from '../entities/comment-for-video_g.entity'

import { CommentForVideoService_DB_G } from '../services/comment-for-video.service'

@Resolver(() => CommentForVideoEntity_G)
export class Comment_F_Video_Resolver_G {
  constructor(
    private readonly commentForVideoService: CommentForVideoService_DB_G,
  ) {}

  @Mutation(() => CommentForVideoEntity_G)
  async createCommentForVideoEntity_G(
    @Args('createCommentInput') createCommentInput: CreateCommentForVideo_I_G,
  ) {
    return await this.commentForVideoService.create(createCommentInput)
  }

  @Query(() => [CommentForVideoEntity_G])
  async findAllCommentsForVideoEntity_G(@Args('videoId') videoId: number) {
    return await this.commentForVideoService.findAll(videoId, 'comment')
  }

  @Query(() => CommentForVideoEntity_G)
  async findOneCommentForVideoEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchCommentForVideo_I_G,
  ) {
    const { videoId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.findOne(
      videoId,
      commentId,
      'comment',
    )
  }

  @Mutation(() => CommentForVideoEntity_G)
  async updateCommentForVideoEntity_G(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForVideo_I_G,
  ) {
    const { commentId, videoId, ...update } = updateCommentInput
    return await this.commentForVideoService.updateOne(
      videoId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => CommentForVideoEntity_G)
  async removeCommentForVideoEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchCommentForVideo_I_G,
  ) {
    const { videoId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.removeOne(
      videoId,
      commentId,
      'comment',
    )
  }
}
