import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyOForPhoto_I_U } from '../dto/comment-for-photo/input.dto'
import { ReplyOForPhotoEntity_U } from '../entities/replyo-f-photo.entity'

@Injectable()
export class ReplyOForPhotoService_DB_U extends Base_Crud_W_FindAll<ReplyOForPhotoEntity_U> {
  constructor(
    @InjectRepository(ReplyOForPhotoEntity_U)
    protected repository: Repository<ReplyOForPhotoEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyOForPhoto_I_U) {
    const comment_f_photo = new ReplyOForPhotoEntity_U()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
