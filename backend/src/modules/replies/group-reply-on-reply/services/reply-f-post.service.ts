import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import { CreateReplyOForPost_I_G } from '../dto/comment-for-post/input.dto'

import { ReplyOForPostEntity_G } from '../entities/replyo-f-post.entity'

@Injectable()
export class ReplyOForPostService_DB_G extends Base_Crud_W_FindAll<ReplyOForPostEntity_G> {
  constructor(
    @InjectRepository(ReplyOForPostEntity_G)
    protected repository: Repository<ReplyOForPostEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyOForPost_I_G) {
    const comment_f_photo = new ReplyOForPostEntity_G()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
