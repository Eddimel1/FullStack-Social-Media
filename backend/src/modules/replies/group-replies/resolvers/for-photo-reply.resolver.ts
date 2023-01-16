import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql'
import { CreateReply, UpdateReply } from '../../shared/dto/input.dto'
import { isSuccess_Reply } from '../../shared/dto/output.dto'
import { find_all_F_Photo_G } from '../dto/comment-for-photo/output.dto'

import { ReplyForPhoto_G } from '../entities/reply-f-photo.entity'
import { ReplyForPhotoService_DB_G } from '../services/reply-f-photo.service'

@Resolver()
export class Reply_F_Photo_Resolver_G {
  constructor(
    private readonly replyForPhotoService_DB_G: ReplyForPhotoService_DB_G,
  ) {}
  @Mutation(() => ReplyForPhoto_G)
  createReplyForPhoto_G(
    @Args('createReply')
    createReply: CreateReply,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.replyForPhotoService_DB_G.create(createReply, userId)
  }

  @Query(() => find_all_F_Photo_G)
  findAll_A_Count_RepliesForPhoto_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.findAll_A_Count(id, ReplyForPhoto_G)
  }
  @Query(() => [ReplyForPhoto_G])
  findDescendantsTree_F_Photo_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.findDescendantsTrees(id)
  }

  @Query(() => ReplyForPhoto_G)
  findAncestorsTree_F_Photo_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.findAncestorsTree(id)
  }
  @Mutation(() => ReplyForPhoto_G)
  updateOneReplyForPhoto_G(@Args('updateReply') updateReply: UpdateReply) {
    return this.replyForPhotoService_DB_G.updateOne(updateReply)
  }
  @Mutation(() => isSuccess_Reply)
  deleteReplyForPhoto_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.deleteOne(id)
  }
}
