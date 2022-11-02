
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { SearchReplyForPost_I_G } from '../../group-replies/dto/comment-for-post/input.dto'
import {
  CreateReplyForPost_I_U,
  UpdateReplyForPost_I_U,
  SearchReplyForPost_I_U,
} from '../dto/comment-for-post/input.dto'
import { ReplyForPostEntity_U } from '../entities/reply-f-post.entity'
import { ReplyForPostService_DB_U } from '../services/reply-f-post.service'

@Resolver(() => ReplyForPostEntity_U)
export class Reply_F_Post_Resolver_U {
  constructor(private readonly replyForPostService: ReplyForPostService_DB_U) {}

  @Mutation(() => ReplyForPostEntity_U)
  createCommentForPostEntity_U(
    @Args('createReplyInput') createReplyInput: CreateReplyForPost_I_U,
  ) {
    return this.replyForPostService.create(createReplyInput)
  }

  @Query(() => [ReplyForPostEntity_U])
  async findAllRepliesForPostEntity_U(@Args('commentId') commentId: number) {
    return await this.replyForPostService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyForPostEntity_U)
  findOneReplyForPostEntity_G(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForPost_I_G,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyForPostService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyForPostEntity_U)
  updateReplyForPostEntity_U(
    @Args('updateCommentInput') updateReplyInput: UpdateReplyForPost_I_U,
  ) {
    const { commentId, replyId, ...update } = updateReplyInput
    return this.replyForPostService.updateOne(
      replyId,
      commentId,
      update,
      'reply',
    )
  }

  @Mutation(() => ReplyForPostEntity_U)
  removeReplyForPostEntity_U(
    @Args('searchAllReplyForPost')
    searchAllReplyForPost: SearchReplyForPost_I_U,
  ) {
    const { replyId, commentId } = searchAllReplyForPost
    return this.replyForPostService.removeOne(replyId, commentId, 'reply')
  }
}
