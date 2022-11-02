import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyOForPhoto_I_G } from '../dto/comment-for-photo/input.dto'
import { ReplyOForPhotoEntity_G } from '../entities/replyo-f-photo.entity'

@Injectable()
export class ReplyOForPhotoService_DB_G extends Base_Crud_W_FindAll<ReplyOForPhotoEntity_G> {
  constructor(
    @InjectRepository(ReplyOForPhotoEntity_G)
    protected repository: Repository<ReplyOForPhotoEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyOForPhoto_I_G) {
    const comment_f_photo = new ReplyOForPhotoEntity_G()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
