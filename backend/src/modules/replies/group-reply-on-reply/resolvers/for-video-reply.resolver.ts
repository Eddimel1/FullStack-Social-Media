import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { SearchReplyForVideo_I_G } from '../../group-replies/dto/comment-for-video/input.dto'
import { ReplyForVideoEntity_G } from '../../group-replies/entities/reply-f-video.entity'
import {
  CreateReplyOForVideo_I_G,
  UpdateReplyOForVideo_I_G,
  SearchReplyOForVideo_I_G,
} from '../dto/comment-for-video/input.dto'
import { ReplyOForVideoEntity_G } from '../entities/replyo-f-video.entity'
import { ReplyOForVideoService_DB_G } from '../services/reply-f-video.service'

@Resolver(() => ReplyOForVideoEntity_G)
export class ReplyO_F_Video_Resolver_G {
  constructor(
    private readonly replyOForVideoService: ReplyOForVideoService_DB_G,
  ) {}

  @Mutation(() => ReplyOForVideoEntity_G)
  createCommentForVideoEntity_G(
    @Args('createReplyInput') createReplyOInput: CreateReplyOForVideo_I_G,
  ) {
    return this.replyOForVideoService.create(createReplyOInput)
  }

  @Query(() => [ReplyOForVideoEntity_G])
  async findAllRepliesForVideoEntity_G(@Args('commentId') commentId: number) {
    return await this.replyOForVideoService.findAll(commentId, 'comment')
  }

  @Query(() => ReplyForVideoEntity_G)
  findOneReplyForVideoEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForVideo_I_G,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyOForVideoService.findOne(replyId, commentId, 'comment')
  }

  @Mutation(() => ReplyOForVideoEntity_G)
  updateReplyOForVideoEntity_G(
    @Args('updateCommentInput') updateReplyOInput: UpdateReplyOForVideo_I_G,
  ) {
    const { commentId, replyId, ...update } = updateReplyOInput
    return this.replyOForVideoService.updateOne(
      replyId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => ReplyOForVideoEntity_G)
  removeReplyOForPostEntity_G(
    @Args('searchAllReplyOForVideo')
    searchAllReplyOForVideo: SearchReplyOForVideo_I_G,
  ) {
    const { replyId, commentId } = searchAllReplyOForVideo
    return this.replyOForVideoService.removeOne(replyId, commentId, 'comment')
  }
}
