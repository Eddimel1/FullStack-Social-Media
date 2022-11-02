import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import {
  CreateReplyForPhoto_I_G,
  SearchReplyForPhoto_I_G,
  UpdateReplyForPhoto_I_G,
} from '../dto/comment-for-photo/input.dto'
import { ReplyForPhotoEntity_G } from '../entities/reply-f-photo.entity'
import { ReplyForPhotoService_DB_G } from '../services/reply-f-photo.service'

@Resolver(() => ReplyForPhotoEntity_G)
export class Reply_F_Photo_Resolver_G {
  constructor(
    private readonly replyForPhotoService: ReplyForPhotoService_DB_G,
  ) {}

  @Mutation(() => ReplyForPhotoEntity_G)
  createReplyForPhotoEntity_G(
    @Args('createReplyInput') createReplyInput: CreateReplyForPhoto_I_G,
  ) {
    return this.replyForPhotoService.create(createReplyInput)
  }

  @Query(() => [ReplyForPhotoEntity_G])
  async findAllRepliesForPhotoEntity_G(@Args('commentId') commentId: number) {
    return await this.replyForPhotoService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyForPhotoEntity_G)
  findOneReplyForPhotoEntity_G(
    @Args('searchAllRepliesForVideo')
    searchAllRepliesForPhoto: SearchReplyForPhoto_I_G,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyForPhotoService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyForPhotoEntity_G)
  updateReplyForPhotoEntity_G(
    @Args('updateReplyInput') updateReplyInput: UpdateReplyForPhoto_I_G,
  ) {
    const { commentId, replyId, ...update } = updateReplyInput
    return this.replyForPhotoService.updateOne(
      replyId,
      commentId,
      update,
      'reply',
    )
  }

  @Mutation(() => ReplyForPhotoEntity_G)
  removeReplyForPhotoEntity_G(
    @Args('searchAllReplyForPhoto')
    searchAllReplyForPhoto: SearchReplyForPhoto_I_G,
  ) {
    const { replyId, commentId } = searchAllReplyForPhoto
    return this.replyForPhotoService.removeOne(replyId, commentId, 'reply')
  }
}
