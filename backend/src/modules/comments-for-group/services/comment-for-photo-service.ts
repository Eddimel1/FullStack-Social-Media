import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateCommentForPhoto_I_G } from '../dto/comment-for-photo/input.dto'
import { CommentForPhotoEntity_G } from '../entities/comment-for-photo_g.entity'

@Injectable()
export class CommentForPhotoService_DB_G extends Base_Crud_W_FindAll<CommentForPhotoEntity_G> {
  constructor(
    @InjectRepository(CommentForPhotoEntity_G)
    protected repository: Repository<CommentForPhotoEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateCommentForPhoto_I_G) {
    const comment_f_photo = new CommentForPhotoEntity_G()
    comment_f_photo.ownerId = createCommentInput.photoId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
//   findAll(photoId: number) {
//     return this.commentForPhotoRepository.find({ where: { photoId } })
//   }

//   findOne(photoId: number, commentId: number) {
//     return this.commentForPhotoRepository.findOne({
//       where: { photoId, id: commentId },
//     })
//   }

//   async update(commentId: number, updateCommentInput: UpdateCommentForPhoto_I) {
//     const { photoId, ...update } = updateCommentInput
//     await this.commentForPhotoRepository
//       .createQueryBuilder('comment')
//       .update()
//       .where('photoId =:photoId', { photoId })
//       .andWhere('id =:commentId', { commentId })
//       .set(update)
//       .execute()
//     return this.findOne(photoId, commentId)
//   }

//   async remove(photoId: number, commentId: number) {
//     const result = await this.commentForPhotoRepository
//       .createQueryBuilder('comment')
//       .delete()
//       .where('photoId =:photoId', { photoId })
//       .andWhere('id =:commentId', { commentId })
//       .execute()
//     const message: comment_F_Photo_Remove_O = {
//       photoId,
//       isDeleted: result.affected > 0 ? true : false,
//     }
//     return message
//   }}
