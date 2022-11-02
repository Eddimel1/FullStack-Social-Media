
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import {
  CreateReplyForVideo_I_U,
  SearchReplyForVideo_I_U,
  UpdateReplyForVideo_I_U,
} from '../dto/comment-for-video/input.dto'
import { ReplyForVideoEntity_U } from '../entities/reply-f-video.entity'
import { ReplyForVideoService_DB_U } from '../services/reply-f-video.service'

@Resolver(() => ReplyForVideoEntity_U)
export class Reply_F_Video_Resolver_U {
  constructor(
    private readonly replyForVideoService: ReplyForVideoService_DB_U,
  ) {}

  @Mutation(() => ReplyForVideoEntity_U)
  createCommentForVideoEntity_U(
    @Args('createReplyInput') createReplyInput: CreateReplyForVideo_I_U,
  ) {
    return this.replyForVideoService.create(createReplyInput)
  }

  @Query(() => [ReplyForVideoEntity_U])
  async findAllRepliesForVideoEntity_U(@Args('commentId') commentId: number) {
    return await this.replyForVideoService.findAll(commentId, 'comment')
  }

  @Query(() => ReplyForVideoEntity_U)
  findOneReplyForVideoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForVideo_I_U,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyForVideoService.findOne(replyId, commentId, 'comment')
  }

  @Mutation(() => ReplyForVideoEntity_U)
  updateReplyForVideoEntity_U(
    @Args('updateCommentInput') updateReplyInput: UpdateReplyForVideo_I_U,
  ) {
    const { commentId, replyId, ...update } = updateReplyInput
    return this.replyForVideoService.updateOne(
      replyId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => ReplyForVideoEntity_U)
  removeReplyForPostEntity_U(
    @Args('searchAllReplyForVideo')
    searchAllReplyForVideo: SearchReplyForVideo_I_U,
  ) {
    const { replyId, commentId } = searchAllReplyForVideo
    return this.replyForVideoService.removeOne(replyId, commentId, 'comment')
  }
}
