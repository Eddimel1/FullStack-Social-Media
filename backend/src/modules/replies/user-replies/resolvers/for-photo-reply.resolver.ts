import { Query } from '@nestjs/graphql'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { ReplyForPhotoEntity_G } from '../../group-replies/entities/reply-f-photo.entity'
import {
  CreateReplyForPhoto_I_U,
  SearchReplyForPhoto_I_U,
  UpdateReplyForPhoto_I_U,
} from '../dto/comment-for-photo/input.dto'
import { ReplyForPhotoEntity_U } from '../entities/reply-f-photo.entity'
import { ReplyForPhotoService_DB_U } from '../services/reply-f-photo.service'

@Resolver(() => ReplyForPhotoEntity_U)
export class Reply_F_Photo_Resolver_U {
  constructor(
    private readonly replyForPhotoService: ReplyForPhotoService_DB_U,
  ) {}

  @Mutation(() => ReplyForPhotoEntity_U)
  createReplyForPhotoEntity_U(
    @Args('createReplyInput') createReplyInput: CreateReplyForPhoto_I_U,
  ) {
    return this.replyForPhotoService.create(createReplyInput)
  }

  @Query(() => [ReplyForPhotoEntity_U])
  async findAllRepliesForPhotoEntity_U(@Args('commentId') commentId: number) {
    return await this.replyForPhotoService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyForPhotoEntity_U)
  findOneReplyForPhotoEntity_U(
    @Args('searchAllRepliesForVideo')
    searchAllRepliesForPhoto: SearchReplyForPhoto_I_U,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyForPhotoService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyForPhotoEntity_G)
  updateReplyForPhotoEntity_U(
    @Args('updateReplyInput') updateReplyInput: UpdateReplyForPhoto_I_U,
  ) {
    const { commentId, replyId, ...update } = updateReplyInput
    return this.replyForPhotoService.updateOne(
      replyId,
      commentId,
      update,
      'reply',
    )
  }

  @Mutation(() => ReplyForPhotoEntity_U)
  removeReplyForPhotoEntity_U(
    @Args('searchAllReplyForPhoto')
    searchAllReplyForPhoto: SearchReplyForPhoto_I_U,
  ) {
    const { replyId, commentId } = searchAllReplyForPhoto
    return this.replyForPhotoService.removeOne(replyId, commentId, 'reply')
  }
}
