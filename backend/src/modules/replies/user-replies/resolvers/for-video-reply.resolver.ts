import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql'
import { CreateReply, UpdateReply } from '../../shared/dto/input.dto'
import { isSuccess_Reply } from '../../shared/dto/output.dto'
import { find_all_F_Video_U } from '../dto/comment-for-video/output.dto'

import { ReplyForVideoEntity_U } from '../entities/reply-f-video.entity'
import { ReplyForVideoService_DB_U } from '../services/reply-f-video.service'

@Resolver()
export class Reply_F_Video_Resolver_U {
  constructor(
    private readonly replyForVideoService_DB_U: ReplyForVideoService_DB_U,
  ) {}
  @Mutation(() => ReplyForVideoEntity_U)
  createReplyForVideoEntity_U(
    @Args('CreateReply')
    createReply: CreateReply,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.replyForVideoService_DB_U.create(createReply, userId)
  }


  @Query(() => find_all_F_Video_U)
  findAll_A_Count_RepliesForVideoEntity_U(@Args('id') id: number) {
    return this.replyForVideoService_DB_U.findAll_A_Count(
      id,
      ReplyForVideoEntity_U,
    )
  }
  @Query(() => ReplyForVideoEntity_U)
  findDescendantsTree_F_Video_U(@Args('id') id: number) {
    return this.replyForVideoService_DB_U.findDescendantsTree(id)
  }

  @Query(() => ReplyForVideoEntity_U)
  findAncestorsTree_F_Video_U(@Args('id') id: number) {
    return this.replyForVideoService_DB_U.findAncestorsTree(id)
  }
  @Mutation(() => ReplyForVideoEntity_U)
  updateOneReplyForVideo_U(@Args('updateReply') updateReply: UpdateReply) {
    return this.replyForVideoService_DB_U.updateOne(updateReply)
  }
  @Mutation(() => isSuccess_Reply)
  deleteReplyForVideo_U(@Args('id') id: number) {
    return this.replyForVideoService_DB_U.deleteOne(id)
  }
}
