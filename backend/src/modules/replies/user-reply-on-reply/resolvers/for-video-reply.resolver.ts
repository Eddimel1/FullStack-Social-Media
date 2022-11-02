import { Query } from '@nestjs/graphql'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { SearchReplyForVideo_I_U } from '../../user-replies/dto/comment-for-video/input.dto'
import { ReplyForVideoEntity_U } from '../../user-replies/entities/reply-f-video.entity'
import {
  CreateReplyOForVideo_I_U,
  UpdateReplyOForVideo_I_U,
  SearchReplyOForVideo_I_U,
} from '../dto/comment-for-video/input.dto'
import { ReplyOForVideoEntity_U } from '../entities/replyo-f-video.entity'
import { ReplyOForVideoService_DB_U } from '../services/reply-f-video.service'

@Resolver(() => ReplyOForVideoEntity_U)
export class ReplyO_F_Video_Resolver_U {
  constructor(
    private readonly replyOForVideoService: ReplyOForVideoService_DB_U,
  ) {}

  @Mutation(() => ReplyOForVideoEntity_U)
  createCommentForVideoEntity_G(
    @Args('createReplyInput') createReplyOInput: CreateReplyOForVideo_I_U,
  ) {
    return this.replyOForVideoService.create(createReplyOInput)
  }

  @Query(() => [ReplyOForVideoEntity_U])
  async findAllRepliesForVideoEntity_G(@Args('commentId') commentId: number) {
    return await this.replyOForVideoService.findAll(commentId, 'comment')
  }

  @Query(() => ReplyForVideoEntity_U)
  findOneReplyForVideoEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForVideo_I_U,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyOForVideoService.findOne(replyId, commentId, 'comment')
  }

  @Mutation(() => ReplyOForVideoEntity_U)
  updateReplyOForVideoEntity_U(
    @Args('updateCommentInput') updateReplyOInput: UpdateReplyOForVideo_I_U,
  ) {
    const { commentId, replyId, ...update } = updateReplyOInput
    return this.replyOForVideoService.updateOne(
      replyId,
      commentId,
      update,
      'comment',
    )
  }

  @Mutation(() => ReplyOForVideoEntity_U)
  removeReplyOForPostEntity_G(
    @Args('searchAllReplyOForVideo')
    searchAllReplyOForVideo: SearchReplyOForVideo_I_U,
  ) {
    const { replyId, commentId } = searchAllReplyOForVideo
    return this.replyOForVideoService.removeOne(replyId, commentId, 'comment')
  }
}
