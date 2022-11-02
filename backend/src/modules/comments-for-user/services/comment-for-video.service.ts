import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import { CreateCommentForVideo_I_U } from '../dto/comment-for-video/input.dto'

import { CommentForVideoEntity_U } from '../entities/comment-for-video.entity'

@Injectable()
export class CommentForVideoService_DB_U extends Base_Crud_W_FindAll<CommentForVideoEntity_U> {
  constructor(
    @InjectRepository(CommentForVideoEntity_U)
    protected repository: Repository<CommentForVideoEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateCommentForVideo_I_U) {
    const comment_f_photo = new CommentForVideoEntity_U()
    comment_f_photo.ownerId = createCommentInput.videoId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}

// @Injectable()
// export class CommentForVideoService_DB_U {
//   constructor(
//     @InjectRepository(CommentForVideoEntity_U)
//     private readonly commentForVideoRepository: Repository<CommentForVideoEntity_U>,
//   ) {}
//   async create(createCommentInput: CreateCommentForVideo_I_U) {
//     const comment_f_photo = new CommentForVideoEntity_U()
//     comment_f_photo.videoId = createCommentInput.videoId
//     comment_f_photo.text = createCommentInput.text
//     return this.commentForVideoRepository.save(comment_f_photo)
//   }

//   findAll(videoId: number) {
//     return this.commentForVideoRepository.find({ where: { videoId } })
//   }

//   findOne(videoId: number, commentId: number) {
//     return this.commentForVideoRepository.findOne({
//       where: { videoId, id: commentId },
//     })
//   }

//   async update(
//     commentId: number,
//     updateCommentInput: UpdateCommentForVideo_I_U,
//   ) {
//     const { videoId, ...update } = updateCommentInput
//     await this.commentForVideoRepository
//       .createQueryBuilder('comment')
//       .update()
//       .where('photoId =:videoId', { videoId })
//       .andWhere('id =:commentId', { commentId })
//       .set(update)
//       .execute()
//     return this.findOne(videoId, commentId)
//   }

//   async remove(videoId: number, commentId: number) {
//     const result = await this.commentForVideoRepository
//       .createQueryBuilder('comment')
//       .delete()
//       .where('photoId =:videoId', { videoId })
//       .andWhere('id =:commentId', { commentId })
//       .execute()
//     const message: comment_F_Video_Remove_O = {
//       videoId,
//       isDeleted: result.affected > 0 ? true : false,
//     }
//     return message
//   }
// }
