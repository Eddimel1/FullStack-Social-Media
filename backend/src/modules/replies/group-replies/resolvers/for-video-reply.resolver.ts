import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import {
  CreateReplyForVideo_I_G,
  SearchReplyForVideo_I_G,
  UpdateReplyForVideo_I_G,
} from '../dto/comment-for-video/input.dto'
import { ReplyForVideoEntity_G } from '../entities/reply-f-video.entity'
import { ReplyForVideoService_DB_G } from '../services/reply-f-video.service'

@Resolver(() => ReplyForVideoEntity_G)
export class Reply_F_Video_Resolver_G {
  constructor(
    private readonly replyForVideoService: ReplyForVideoService_DB_G,
  ) {}

  @Mutation(() => ReplyForVideoEntity_G)
  createCommentForVideoEntity_G(
    @Args('createReplyInput') createReplyInput: CreateReplyForVideo_I_G,
  ) {
    return this.replyForVideoService.create(createReplyInput)
  }

  @Query(() => [ReplyForVideoEntity_G])
  async findAllRepliesForVideoEntity_G(@Args('commentId') commentId: number) {
    return await this.replyForVideoService.findAll(commentId, 'comment')
  }

  @Query(() => ReplyForVideoEntity_G)
  findOneReplyForVideoEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForVideo_I_G,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyForVideoService.findOne(replyId, commentId, 'comment')
  }

  @Mutation(() => ReplyForVideoEntity_G)
  updateReplyForVideoEntity_G(
    @Args('updateCommentInput') updateReplyInput: UpdateReplyForVideo_I_G,
  ) {
    const { commentId, replyId, ...update } = updateReplyInput
    return this.replyForVideoService.updateOne(
      replyId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => ReplyForVideoEntity_G)
  removeReplyForPostEntity_G(
    @Args('searchAllReplyForVideo')
    searchAllReplyForVideo: SearchReplyForVideo_I_G,
  ) {
    const { replyId, commentId } = searchAllReplyForVideo
    return this.replyForVideoService.removeOne(replyId, commentId, 'comment')
  }
}
