import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql'

import { CreateReply, UpdateReply } from '../../shared/dto/input.dto'
import { isSuccess_Reply } from '../../shared/dto/output.dto'
import { find_all_F_Post_U } from '../dto/comment-for-post/output.dto'

import { ReplyForPost_U } from '../entities/reply-f-post.entity'
import { ReplyForPostService_DB_U } from '../services/reply-f-post.service'

@Resolver()
export class Reply_F_Post_Resolver_U {
  constructor(
    private readonly replyForPostService_DB_U: ReplyForPostService_DB_U,
  ) {}
  @Mutation(() => ReplyForPost_U)
  createReplyForPost_U(
    @Args('CreateReply')
    createReply: CreateReply,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.replyForPostService_DB_U.create(createReply, userId)
  }

  @Query(() => find_all_F_Post_U)
  findAll_A_Count_RepliesForPost_U(@Args('id') id: number) {
    return this.replyForPostService_DB_U.findAll_A_Count(id, ReplyForPost_U)
  }
  @Query(() => ReplyForPost_U)
  findDescendantsTree_F_Post_U(@Args('id') id: number) {
    return this.replyForPostService_DB_U.findDescendantsTree(id)
  }

  @Query(() => ReplyForPost_U)
  findAncestorsTree_F_Post_U(@Args('id') id: number) {
    return this.replyForPostService_DB_U.findAncestorsTree(id)
  }
  @Mutation(() => ReplyForPost_U)
  updateOneReplyForPost_U(@Args('updateReply') updateReply: UpdateReply) {
    return this.replyForPostService_DB_U.updateOne(updateReply)
  }
  @Mutation(() => isSuccess_Reply)
  deleteReplyForPost_U(@Args('id') id: number) {
    return this.replyForPostService_DB_U.deleteOne(id)
  }
}
