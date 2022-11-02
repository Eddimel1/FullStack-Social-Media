import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import { CreateCommentForPhoto_I_U } from '../dto/comment-for-photo/input.dto'
import { comment_F_Photo_Remove_O } from '../dto/comment-for-photo/output.dto'

import { CommentForPhotoEntity_U } from '../entities/comment-for-photo.entity'

@Injectable()
export class CommentForPhotoService_DB_U extends Base_Crud_W_FindAll<CommentForPhotoEntity_U> {
  constructor(
    @InjectRepository(CommentForPhotoEntity_U)
    protected repository: Repository<CommentForPhotoEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateCommentForPhoto_I_U) {
    const comment_f_photo = new CommentForPhotoEntity_U()
    comment_f_photo.ownerId = createCommentInput.photoId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
