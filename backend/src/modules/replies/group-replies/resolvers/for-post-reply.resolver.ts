import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import {
  CreateReplyForPost_I_G,
  SearchReplyForPost_I_G,
  UpdateReplyForPost_I_G,
} from '../dto/comment-for-post/input.dto'
import { ReplyForPostEntity_G } from '../entities/reply-f-post.entity'
import { ReplyForPostService_DB_G } from '../services/reply-f-post.service'

@Resolver(() => ReplyForPostEntity_G)
export class Reply_F_Post_Resolver_G {
  constructor(private readonly replyForPostService: ReplyForPostService_DB_G) {}

  @Mutation(() => ReplyForPostEntity_G)
  createCommentForPostEntity_G(
    @Args('createReplyInput') createReplyInput: CreateReplyForPost_I_G,
  ) {
    return this.replyForPostService.create(createReplyInput)
  }

  @Query(() => [ReplyForPostEntity_G])
  async findAllRepliesForPostEntity_G(@Args('commentId') commentId: number) {
    return await this.replyForPostService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyForPostEntity_G)
  findOneReplyForPostEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForPost_I_G,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyForPostService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyForPostEntity_G)
  updateReplyForPostEntity_G(
    @Args('updateCommentInput') updateReplyInput: UpdateReplyForPost_I_G,
  ) {
    const { commentId, replyId, ...update } = updateReplyInput
    return this.replyForPostService.updateOne(
      replyId,
      commentId,
      update,
      'reply',
    )
  }

  @Mutation(() => ReplyForPostEntity_G)
  removeReplyForPostEntity_G(
    @Args('searchAllReplyForPost')
    searchAllReplyForPost: SearchReplyForPost_I_G,
  ) {
    const { replyId, commentId } = searchAllReplyForPost
    return this.replyForPostService.removeOne(replyId, commentId, 'reply')
  }
}
