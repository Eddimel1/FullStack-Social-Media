import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import {
  CreateCommentForPost_I_U,
  UpdateCommentForPost_I_U,
} from '../dto/comment-for-post/input.dto'
import { comment_F_Post_Remove_O } from '../dto/comment-for-post/output.dto'

import { CommentForPostEntity_U } from '../entities/comment-for-post.entity'

@Injectable()
export class CommentForPostService_DB_U extends Base_Crud_W_FindAll<CommentForPostEntity_U> {
  constructor(
    @InjectRepository(CommentForPostEntity_U)
    protected repository: Repository<CommentForPostEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateCommentForPost_I_U) {
    const comment_f_photo = new CommentForPostEntity_U()
    comment_f_photo.ownerId = createCommentInput.postId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}

// @Injectable()
// export class CommentForPostService_DB_U {
//   constructor(
//     @InjectRepository(CommentForPostEntity_U)
//     private readonly commentForPostRepository: Repository<CommentForPostEntity_U>,
//   ) {}
//   async create(createCommentInput: CreateCommentForPost_I_U) {
//     const comment_f_photo = new CommentForPostEntity_U()
//     comment_f_photo.postId = createCommentInput.postId
//     comment_f_photo.text = createCommentInput.text
//     return this.commentForPostRepository.save(comment_f_photo)
//   }

//   findAll(postId: number) {
//     return this.commentForPostRepository.find({ where: { postId } })
//   }

//   findOne(postId: number, commentId: number) {
//     return this.commentForPostRepository.findOne({
//       where: { postId, id: commentId },
//     })
//   }

//   async update(
//     commentId: number,
//     updateCommentInput: UpdateCommentForPost_I_U,
//   ) {
//     const { postId, ...update } = updateCommentInput
//     await this.commentForPostRepository
//       .createQueryBuilder('comment')
//       .update()
//       .where('postId =:postId', { postId })
//       .andWhere('id =:commentId', { commentId })
//       .set(update)
//       .execute()
//     return this.findOne(postId, commentId)
//   }

//   async remove(postId: number, commentId: number) {
//     const result = await this.commentForPostRepository
//       .createQueryBuilder('comment')
//       .delete()
//       .where('postId =:postId', { postId })
//       .andWhere('id =:commentId', { commentId })
//       .execute()
//     const message: comment_F_Post_Remove_O = {
//       postId,
//       isDeleted: result.affected > 0 ? true : false,
//     }
//     return message
//   }
// }
