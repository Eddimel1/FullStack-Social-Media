import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyForPhoto_I_U } from '../dto/comment-for-photo/input.dto'
import { ReplyForPhotoEntity_U } from '../entities/reply-f-photo.entity'

@Injectable()
export class ReplyForPhotoService_DB_U extends Base_Crud_W_FindAll<ReplyForPhotoEntity_U> {
  constructor(
    @InjectRepository(ReplyForPhotoEntity_U)
    protected repository: Repository<ReplyForPhotoEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyForPhoto_I_U) {
    const comment_f_photo = new ReplyForPhotoEntity_U()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
