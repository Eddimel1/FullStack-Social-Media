import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Repository } from 'typeorm'
import {
  CreateCommentForPhoto_I,
  UpdateCommentForPhoto_I,
} from '../dto/comment-for-photo/input.dto'
import { comment_F_Photo_Remove_O } from '../dto/comment-for-photo/output.dto'

import { CommentForPhotoEntity } from '../entities/comment-for-photo.entity'

@Injectable()
export class CommentForPhotoService_DB {
  constructor(
    @InjectRepository(CommentForPhotoEntity)
    private readonly commentForPhotoRepository: Repository<CommentForPhotoEntity>,
  ) {}
  async create(createCommentInput: CreateCommentForPhoto_I) {
    const comment_f_photo = new CommentForPhotoEntity()
    comment_f_photo.photoId = createCommentInput.photoId
    comment_f_photo.text = createCommentInput.text
    return this.commentForPhotoRepository.save(comment_f_photo)
  }

  findAll(photoId: number) {
    return this.commentForPhotoRepository.find({ where: { photoId } })
  }

  findOne(photoId: number, commentId: number) {
    return this.commentForPhotoRepository.findOne({
      where: { photoId, id: commentId },
    })
  }

  async update(commentId: number, updateCommentInput: UpdateCommentForPhoto_I) {
    const { photoId, ...update } = updateCommentInput
    await this.commentForPhotoRepository
      .createQueryBuilder('comment')
      .update()
      .where('photoId =:photoId', { photoId })
      .andWhere('id =:commentId', { commentId })
      .set(update)
      .execute()
    return this.findOne(photoId, commentId)
  }

  async remove(photoId: number, commentId: number) {
    const result = await this.commentForPhotoRepository
      .createQueryBuilder('comment')
      .delete()
      .where('photoId =:photoId', { photoId })
      .andWhere('id =:commentId', { commentId })
      .execute()
    const message: comment_F_Photo_Remove_O = {
      photoId,
      isDeleted: result.affected > 0 ? true : false,
    }
    return message
  }
}
