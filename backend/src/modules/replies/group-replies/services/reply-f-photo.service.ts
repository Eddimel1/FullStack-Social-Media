import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import { CreateReplyForPhoto_I_G } from '../dto/comment-for-photo/input.dto'
import { ReplyForPhotoEntity_G } from '../entities/reply-f-photo.entity'

@Injectable()
export class ReplyForPhotoService_DB_G extends Base_Crud_W_FindAll<ReplyForPhotoEntity_G> {
  constructor(
    @InjectRepository(ReplyForPhotoEntity_G)
    protected repository: Repository<ReplyForPhotoEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyForPhoto_I_G) {
    const comment_f_photo = new ReplyForPhotoEntity_G()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
