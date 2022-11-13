import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql'
import { CreateReply, UpdateReply } from '../../shared/dto/input.dto'
import { isSuccess_Reply } from '../../shared/dto/output.dto'
import { find_all_F_Photo_G } from '../dto/comment-for-photo/output.dto'

import { ReplyForPhotoEntity_G } from '../entities/reply-f-photo.entity'
import { ReplyForPhotoService_DB_G } from '../services/reply-f-photo.service'

@Resolver()
export class Reply_F_Photo_Resolver_G {
  constructor(
    private readonly replyForPhotoService_DB_G: ReplyForPhotoService_DB_G,
  ) {}
  @Mutation(() => ReplyForPhotoEntity_G)
  createReplyForPhotoEntity_G(
    @Args('createReply')
    createReply: CreateReply,
    @Context() context,
  ) {
    const userId = context.req.user.id
    return this.replyForPhotoService_DB_G.create(createReply, userId)
  }



  @Query(() => find_all_F_Photo_G)
  findAll_A_Count_RepliesForPhotoEntity_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.findAll_A_Count(
      id,
      ReplyForPhotoEntity_G,
    )
  }
  @Query(() => ReplyForPhotoEntity_G)
  findDescendantsTree_F_Photo_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.findDescendantsTree(id)
  }

  @Query(() => ReplyForPhotoEntity_G)
  findAncestorsTree_F_Photo_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.findAncestorsTree(id)
  }
  @Mutation(() => ReplyForPhotoEntity_G)
  updateOneReplyForPhoto_G(@Args('updateReply') updateReply: UpdateReply) {
    return this.replyForPhotoService_DB_G.updateOne(updateReply)
  }
  @Mutation(() => isSuccess_Reply)
  deleteReplyForPhoto_G(@Args('id') id: number) {
    return this.replyForPhotoService_DB_G.deleteOne(id)
  }
}
