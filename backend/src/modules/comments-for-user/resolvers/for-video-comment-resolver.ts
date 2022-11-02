import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import {
  CreateCommentForVideo_I_U,
  SearchCommentForVideo_I_U,
  UpdateCommentForVideo_I_U,
} from '../dto/comment-for-video/input.dto'
import { CommentForVideoEntity_U } from '../entities/comment-for-video.entity'
import { CommentForVideoService_DB_U } from '../services/comment-for-video.service'

@Resolver(() => CommentForVideoEntity_U)
export class Comment_F_Video_Resolver_U {
  constructor(
    private readonly commentForVideoService: CommentForVideoService_DB_U,
  ) {}

  @Mutation(() => CommentForVideoEntity_U)
  async createCommentForVideoEntity_U(
    @Args('createCommentInput') createCommentInput: CreateCommentForVideo_I_U,
  ) {
    return await this.commentForVideoService.create(createCommentInput)
  }

  @Query(() => [CommentForVideoEntity_U])
  async findAllCommentsForVideoEntity_U(@Args('photoId') videoId: number) {
    return await this.commentForVideoService.findAll(videoId, 'comments')
  }

  @Query(() => CommentForVideoEntity_U)
  async findOneCommentForVideoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchCommentForVideo_I_U,
  ) {
    const { videoId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.findOne(
      videoId,
      commentId,
      'comment',
    )
  }

  @Mutation(() => CommentForVideoEntity_U)
  async updateCommentForVideoEntity_U(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentForVideo_I_U,
  ) {
    const { commentId, videoId, ...text } = updateCommentInput
    return await this.commentForVideoService.updateOne(
      videoId,
      commentId,
      text,
      'comment',
    )
  }

  @Mutation(() => CommentForVideoEntity_U)
  async removeCommentForVideoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllCommentForVideo: SearchCommentForVideo_I_U,
  ) {
    const { videoId, commentId } = searchAllCommentForVideo
    return await this.commentForVideoService.removeOne(
      videoId,
      commentId,
      'comment',
    )
  }
}
