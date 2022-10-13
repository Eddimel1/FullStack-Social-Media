import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import {
  CreateCommentForVideo_I,
  SearchCommentForVideo_I,
  UpdateCommentForVideo_I,
} from '../dto/comment-for-video/input.dto'
import { CommentForVideoEntity } from '../entities/comment-for-video.entity'
import { CommentForVideoService_DB } from '../services/comment-for-video.service'

@Resolver(() => CommentForVideoEntity)
export class Comment_F_Video_Resolver {
  constructor(
    private readonly commentForVideoService: CommentForVideoService_DB,
  ) {}

  @Mutation(() => CommentForVideoEntity)
  async createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentForVideo_I,
  ) {
    return await this.commentForVideoService.create(createCommentInput)
  }

  @Query(() => [CommentForVideoEntity])
  async findAll(@Args('videoId') videoId: number) {
    return await this.commentForVideoService.findAll(videoId)
  }

  @Query(() => CommentForVideoEntity)
  async findOne(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchCommentForVideo_I,
  ) {
    const { videoId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.findOne(videoId, commentId)
  }

  @Mutation(() => CommentForVideoEntity)
  async updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForVideo_I,
  ) {
    return await this.commentForVideoService.update(
      updateCommentInput.videoId,
      updateCommentInput,
    )
  }

  @Mutation(() => CommentForVideoEntity)
  async removeComment(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchCommentForVideo_I,
  ) {
    const { videoId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.remove(videoId, commentId)
  }
}
