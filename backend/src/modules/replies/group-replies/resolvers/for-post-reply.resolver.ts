import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql'
import { CreateReply, UpdateReply } from '../../shared/dto/input.dto'
import { isSuccess_Reply } from '../../shared/dto/output.dto'
import { find_all_F_Post_G } from '../dto/comment-for-post/output.dto'
import { ReplyForPost_G } from '../entities/reply-f-post.entity'

import { ReplyForPostService_DB_G } from '../services/reply-f-post.service'

@Resolver()
export class Reply_F_Post_Resolver_G {
  constructor(
    private readonly replyForPostService_DB_G: ReplyForPostService_DB_G,
  ) {}
  @Mutation(() => ReplyForPost_G)
  createReplyForPost_G(
    @Args('CreateReply')
    createReply: CreateReply,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.replyForPostService_DB_G.create(createReply, userId)
  }

  @Query(() => find_all_F_Post_G)
  findAll_A_Count_RepliesForPost_G(@Args('id') id: number) {
    return this.replyForPostService_DB_G.findAll_A_Count(id, ReplyForPost_G)
  }
  @Query(() => [ReplyForPost_G])
  findDescendantsTree_F_Post_G(@Args('id') id: number) {
    return this.replyForPostService_DB_G.findDescendantsTrees(id)
  }

  @Query(() => ReplyForPost_G)
  findAncestorsTree_F_Post_G(@Args('id') id: number) {
    return this.replyForPostService_DB_G.findAncestorsTree(id)
  }
  @Mutation(() => ReplyForPost_G)
  updateOneReplyForPost_G(@Args('updateReply') updateReply: UpdateReply) {
    return this.replyForPostService_DB_G.updateOne(updateReply)
  }
  @Mutation(() => ReplyForPost_G)
  deleteReplyForPost_G(@Args('id') id: number) {
    return this.replyForPostService_DB_G.deleteOne(id)
  }
}
