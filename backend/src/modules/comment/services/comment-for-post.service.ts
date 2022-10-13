import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'
import {
  CreateCommentForPost_I,
  UpdateCommentForPost_I,
} from '../dto/comment-for-post/input.dto'
import { comment_F_Post_Remove_O } from '../dto/comment-for-post/output.dto'

import { CommentForPostEntity } from '../entities/comment-for-post.entity'

@Injectable()
export class CommentForPostService_DB {
  constructor(
    @InjectRepository(CommentForPostEntity)
    private readonly commentForPostRepository: Repository<CommentForPostEntity>,
  ) {}
  async create(createCommentInput: CreateCommentForPost_I) {
    const comment_f_photo = new CommentForPostEntity()
    comment_f_photo.postId = createCommentInput.postId
    comment_f_photo.text = createCommentInput.text
    return this.commentForPostRepository.save(comment_f_photo)
  }

  findAll(postId: number) {
    return this.commentForPostRepository.find({ where: { postId } })
  }

  findOne(postId: number, commentId: number) {
    return this.commentForPostRepository.findOne({
      where: { postId, id: commentId },
    })
  }

  async update(commentId: number, updateCommentInput: UpdateCommentForPost_I) {
    const { postId, ...update } = updateCommentInput
    await this.commentForPostRepository
      .createQueryBuilder('comment')
      .update()
      .where('photoId =:postId', { postId })
      .andWhere('id =:commentId', { commentId })
      .set(update)
      .execute()
    return this.findOne(postId, commentId)
  }

  async remove(postId: number, commentId: number) {
    const result = await this.commentForPostRepository
      .createQueryBuilder('comment')
      .delete()
      .where('photoId =:postId', { postId })
      .andWhere('id =:commentId', { commentId })
      .execute()
    const message: comment_F_Post_Remove_O = {
      postId,
      isDeleted: result.affected > 0 ? true : false,
    }
    return message
  }
}
