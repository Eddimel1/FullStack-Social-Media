import { Context, Query } from '@nestjs/graphql'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { CreateReply, UpdateReply } from '../../shared/dto/input.dto'
import { isSuccess_Reply } from '../../shared/dto/output.dto'
import { find_all_F_Photo_U } from '../dto/comment-for-photo/output.dto'

import { ReplyForPhoto_U } from '../entities/reply-f-photo.entity'
import { ReplyForPhotoService_DB_U } from '../services/reply-f-photo.service'

@Resolver()
export class Reply_F_Photo_Resolver_U {
  constructor(
    private readonly replyForPhotoService_DB_U: ReplyForPhotoService_DB_U,
  ) {}
  @Mutation(() => ReplyForPhoto_U)
  createReplyForPhoto_U(
    @Args('CreateReply')
    createReply: CreateReply,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.replyForPhotoService_DB_U.create(createReply, userId)
  }

  @Query(() => find_all_F_Photo_U)
  findAll_A_Count_RepliesForPhoto_U(@Args('id') id: number) {
    return this.replyForPhotoService_DB_U.findAll_A_Count(id, ReplyForPhoto_U)
  }
  @Query(() => ReplyForPhoto_U)
  findDescendantsTree_U(@Args('id') id: number) {
    return this.replyForPhotoService_DB_U.findDescendantsTree(id)
  }

  @Query(() => ReplyForPhoto_U)
  findAncestorsTree_F_Photo_U(@Args('id') id: number) {
    return this.replyForPhotoService_DB_U.findAncestorsTree(id)
  }
  @Mutation(() => ReplyForPhoto_U)
  updateOneReplyForPhoto_U(@Args('updateReply') updateReply: UpdateReply) {
    return this.replyForPhotoService_DB_U.updateOne(updateReply)
  }
  @Mutation(() => isSuccess_Reply)
  deleteReplyForPhoto_U(@Args('id') id: number) {
    return this.replyForPhotoService_DB_U.deleteOne(id)
  }
}
