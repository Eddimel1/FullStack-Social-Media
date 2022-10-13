import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'
import {
  CreateCommentForVideo_I,
  UpdateCommentForVideo_I,
} from '../dto/comment-for-video/input.dto'
import { comment_F_Video_Remove_O } from '../dto/comment-for-video/output.dto'

import { CommentForVideoEntity } from '../entities/comment-for-video.entity'

@Injectable()
export class CommentForVideoService_DB {
  constructor(
    @InjectRepository(CommentForVideoEntity)
    private readonly commentForVideoRepository: Repository<CommentForVideoEntity>,
  ) {}
  async create(createCommentInput: CreateCommentForVideo_I) {
    const comment_f_photo = new CommentForVideoEntity()
    comment_f_photo.videoId = createCommentInput.videoId
    comment_f_photo.text = createCommentInput.text
    return this.commentForVideoRepository.save(comment_f_photo)
  }

  findAll(videoId: number) {
    return this.commentForVideoRepository.find({ where: { videoId } })
  }

  findOne(videoId: number, commentId: number) {
    return this.commentForVideoRepository.findOne({
      where: { videoId, id: commentId },
    })
  }

  async update(commentId: number, updateCommentInput: UpdateCommentForVideo_I) {
    const { videoId, ...update } = updateCommentInput
    await this.commentForVideoRepository
      .createQueryBuilder('comment')
      .update()
      .where('photoId =:videoId', { videoId })
      .andWhere('id =:commentId', { commentId })
      .set(update)
      .execute()
    return this.findOne(videoId, commentId)
  }

  async remove(videoId: number, commentId: number) {
    const result = await this.commentForVideoRepository
      .createQueryBuilder('comment')
      .delete()
      .where('photoId =:videoId', { videoId })
      .andWhere('id =:commentId', { commentId })
      .execute()
    const message: comment_F_Video_Remove_O = {
      videoId,
      isDeleted: result.affected > 0 ? true : false,
    }
    return message
  }
}
