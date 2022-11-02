import { Query } from '@nestjs/graphql'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { ReplyOForPhotoEntity_G } from '../../group-reply-on-reply/entities/replyo-f-photo.entity'
import { ReplyForPhotoEntity_U } from '../../user-replies/entities/reply-f-photo.entity'
import {
  CreateReplyOForPhoto_I_U,
  SearchReplyOForPhoto_I_U,
  UpdateReplyOForPhoto_I_U,
} from '../dto/comment-for-photo/input.dto'
import { ReplyOForPhotoEntity_U } from '../entities/replyo-f-photo.entity'
import { ReplyOForPhotoService_DB_U } from '../services/reply-f-photo.service'

@Resolver(() => ReplyOForPhotoEntity_U)
export class ReplyO_F_Photo_Resolver_U {
  constructor(
    private readonly replyOForPhotoService: ReplyOForPhotoService_DB_U,
  ) {}

  @Mutation(() => ReplyOForPhotoEntity_U)
  createReplyOForPhotoEntity_G(
    @Args('createReplyOInput') createReplyOInput: CreateReplyOForPhoto_I_U,
  ) {
    return this.replyOForPhotoService.create(createReplyOInput)
  }

  @Query(() => [ReplyOForPhotoEntity_G])
  async findAllRepliesOForPhotoEntity_G(@Args('commentId') commentId: number) {
    return await this.replyOForPhotoService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyOForPhotoEntity_U)
  findOneReplyOForPhotoEntity_G(
    @Args('searchAllRepliesOForVideo')
    searchAllRepliesOForPhoto: SearchReplyOForPhoto_I_U,
  ) {
    const { replyId, commentId } = searchAllRepliesOForPhoto
    return this.replyOForPhotoService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyForPhotoEntity_U)
  updateReplyForPhotoEntity_U(
    @Args('updateReplyOInput') updateReplyOInput: UpdateReplyOForPhoto_I_U,
  ) {
    const { commentId, replyId, ...update } = updateReplyOInput
    return this.replyOForPhotoService.updateOne(
      replyId,
      commentId,
      update,
      'reply',
    )
  }

  @Mutation(() => ReplyOForPhotoEntity_U)
  removeReplyOForPhotoEntity_G(
    @Args('searchAllReplyOForPhoto')
    searchAllReplyOForPhoto: SearchReplyOForPhoto_I_U,
  ) {
    const { replyId, commentId } = searchAllReplyOForPhoto
    return this.replyOForPhotoService.removeOne(replyId, commentId, 'reply')
  }
}
