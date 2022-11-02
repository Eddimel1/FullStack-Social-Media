import { Query } from '@nestjs/graphql'
import { Resolver, Mutation, Args } from '@nestjs/graphql'
import {
  UpdateReplyOForPost_I_G,
  SearchReplyOForPost_I_G,
} from '../../group-reply-on-reply/dto/comment-for-post/input.dto'
import { SearchReplyForPost_I_U } from '../../user-replies/dto/comment-for-post/input.dto'
import { ReplyForPostEntity_U } from '../../user-replies/entities/reply-f-post.entity'
import { CreateReplyOForPost_I_U } from '../dto/comment-for-post/input.dto'
import { ReplyOForPostEntity_U } from '../entities/replyo-f-post.entity'
import { ReplyOForPostService_DB_U } from '../services/reply-f-post.service'

@Resolver(() => ReplyOForPostEntity_U)
export class ReplyO_F_Post_Resolver_U {
  constructor(
    private readonly replyOForPostService: ReplyOForPostService_DB_U,
  ) {}

  @Mutation(() => ReplyOForPostEntity_U)
  createCommentForPostEntity_G(
    @Args('createReplyInput') createReplyOInput: CreateReplyOForPost_I_U,
  ) {
    return this.replyOForPostService.create(createReplyOInput)
  }

  @Query(() => [ReplyOForPostEntity_U])
  async findAllRepliesOForPostEntity_G(@Args('commentId') commentId: number) {
    return await this.replyOForPostService.findAll(commentId, 'replies')
  }

  @Query(() => ReplyForPostEntity_U)
  findOneReplyForPostEntity_U(
    @Args('searchAllCommentForVideo')
    searchAllRepliesForPhoto: SearchReplyForPost_I_U,
  ) {
    const { replyId, commentId } = searchAllRepliesForPhoto
    return this.replyOForPostService.findOne(replyId, commentId, 'reply')
  }

  @Mutation(() => ReplyOForPostEntity_U)
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

  @Mutation(() => ReplyOForPostEntity_U)
  removeReplyOForPostEntity_G(
    @Args('searchAllReplyOForPost')
    searchAllReplyOForPost: SearchReplyOForPost_I_G,
  ) {
    const { replyId, commentId } = searchAllReplyOForPost
    return this.replyOForPostService.removeOne(replyId, commentId, 'reply')
  }
}
