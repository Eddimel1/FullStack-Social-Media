import { Query } from '@nestjs/graphql'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { SearchReplyForPost_I_G } from '../../group-replies/dto/comment-for-post/input.dto'
import { ReplyForPostEntity_G } from '../../group-replies/entities/reply-f-post.entity'
import {
  CreateReplyOForPost_I_G,
  UpdateReplyOForPost_I_G,
  SearchReplyOForPost_I_G,
} from '../dto/comment-for-post/input.dto'
import { ReplyOForPostEntity_G } from '../entities/replyo-f-post.entity'
import { ReplyOForPostService_DB_G } from '../services/reply-f-post.service'

@Resolver(() => ReplyOForPostEntity_G)
export class ReplyO_F_Post_Resolver_G {
  constructor(
    private readonly replyOForPostService: ReplyOForPostService_DB_G,
  ) {}

  @Mutation(() => ReplyOForPostEntity_G)
  createCommentForPostEntity_G(
    @Args('createReplyInput') createReplyOInput: CreateReplyOForPost_I_G,
  ) {
    return this.replyOForPostService.create(createReplyOInput)
  }

  @Query(() => [ReplyOForPostEntity_G])
  async findAllRepliesOForPostEntity_G(@Args('commentId') commentId: number) {
    return await this.replyOForPostService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyForPostEntity_G)
  findOneReplyForPostEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForPost_I_G,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyOForPostService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyOForPostEntity_G)
  updateReplyOForPostEntity_G(
    @Args('updateCommentInput') updateReplyOInput: UpdateReplyOForPost_I_G,
  ) {
    const { commentId, replyId, ...update } = updateReplyOInput
    return this.replyOForPostService.updateOne(
      replyId,
      commentId,
      update,
      'reply',
    )
  }

  @Mutation(() => ReplyOForPostEntity_G)
  removeReplyOForPostEntity_G(
    @Args('searchAllReplyOForPost')
    searchAllReplyOForPost: SearchReplyOForPost_I_G,
  ) {
    const { replyId, commentId } = searchAllReplyOForPost
    return this.replyOForPostService.removeOne(replyId, commentId, 'reply')
  }
}
