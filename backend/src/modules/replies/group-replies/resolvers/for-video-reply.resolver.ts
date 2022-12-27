import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql'
import { CreateReply, UpdateReply } from '../../shared/dto/input.dto'
import { isSuccess_Reply } from '../../shared/dto/output.dto'
import { find_all_F_Video_G } from '../dto/comment-for-video/output.dto'

import { ReplyForVideo_G } from '../entities/reply-f-video.entity'
import { ReplyForVideoService_DB_G } from '../services/reply-f-video.service'

@Resolver()
export class Reply_F_Video_Resolver_G {
  constructor(
    private readonly replyForVideoService_DB_G: ReplyForVideoService_DB_G,
  ) {}
  @Mutation(() => ReplyForVideo_G)
  createReplyForVideo_G(
    @Args('CreateReply')
    createReply: CreateReply,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.replyForVideoService_DB_G.create(createReply, userId)
  }

  @Query(() => find_all_F_Video_G)
  findAll_A_Count_RepliesForPhoto_G(@Args('id') id: number) {
    return this.replyForVideoService_DB_G.findAll_A_Count(id, ReplyForVideo_G)
  }
  @Query(() => ReplyForVideo_G)
  findDescendantsTree_G(@Args('id') id: number) {
    return this.replyForVideoService_DB_G.findDescendantsTree(id)
  }

  @Query(() => ReplyForVideo_G)
  findAncestorsTree_F_Video_G(@Args('id') id: number) {
    return this.replyForVideoService_DB_G.findAncestorsTree(id)
  }
  @Mutation(() => ReplyForVideo_G)
  updateOneReplyForVideo_G(@Args('updateReply') updateReply: UpdateReply) {
    return this.replyForVideoService_DB_G.updateOne(updateReply)
  }
  @Mutation(() => isSuccess_Reply)
  deleteReplyForVideo_G(@Args('id') id: number) {
    return this.replyForVideoService_DB_G.deleteOne(id)
  }
}
