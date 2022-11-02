import { Query } from '@nestjs/graphql'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { ReplyForPhotoEntity_G } from '../../group-replies/entities/reply-f-photo.entity'
import {
  CreateReplyOForPhoto_I_G,
  SearchReplyOForPhoto_I_G,
  UpdateReplyOForPhoto_I_G,
} from '../dto/comment-for-photo/input.dto'
import { ReplyOForPhotoEntity_G } from '../entities/replyo-f-photo.entity'
import { ReplyOForPhotoService_DB_G } from '../services/reply-f-photo.service'

@Resolver(() => ReplyOForPhotoEntity_G)
export class ReplyO_F_Photo_Resolver_G {
  constructor(
    private readonly replyOForPhotoService: ReplyOForPhotoService_DB_G,
  ) {}

  @Mutation(() => ReplyOForPhotoEntity_G)
  createReplyOForPhotoEntity_G(
    @Args('createReplyOInput') createReplyOInput: CreateReplyOForPhoto_I_G,
  ) {
    return this.replyOForPhotoService.create(createReplyOInput)
  }

  @Query(() => [ReplyOForPhotoEntity_G])
  async findAllRepliesOForPhotoEntity_G(@Args('commentId') commentId: number) {
    return await this.replyOForPhotoService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyOForPhotoEntity_G)
  findOneReplyOForPhotoEntity_G(
    @Args('searchAllRepliesOForVideo')
    searchAllRepliesOForPhoto: SearchReplyOForPhoto_I_G,
  ) {
    const { replyId, commentId } = searchAllRepliesOForPhoto
    return this.replyOForPhotoService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyForPhotoEntity_G)
  updateReplyForPhotoEntity_G(
    @Args('updateReplyOInput') updateReplyOInput: UpdateReplyOForPhoto_I_G,
  ) {
    const { commentId, replyId, ...update } = updateReplyOInput
    return this.replyOForPhotoService.updateOne(
      replyId,
      commentId,
      update,
      'reply',
    )
  }

  @Mutation(() => ReplyOForPhotoEntity_G)
  removeReplyOForPhotoEntity_G(
    @Args('searchAllReplyOForPhoto')
    searchAllReplyOForPhoto: SearchReplyOForPhoto_I_G,
  ) {
    const { replyId, commentId } = searchAllReplyOForPhoto
    return this.replyOForPhotoService.removeOne(replyId, commentId, 'reply')
  }
}
