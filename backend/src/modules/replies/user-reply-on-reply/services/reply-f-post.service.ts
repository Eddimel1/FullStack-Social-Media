import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { ReplyOForPostEntity_G } from '../../group-reply-on-reply/entities/replyo-f-post.entity'
import { CreateReplyOForPost_I_U } from '../dto/comment-for-post/input.dto'
import { ReplyOForPostEntity_U } from '../entities/replyo-f-post.entity'

@Injectable()
export class ReplyOForPostService_DB_U extends Base_Crud_W_FindAll<ReplyOForPostEntity_U> {
  constructor(
    @InjectRepository(ReplyOForPostEntity_G)
    protected repository: Repository<ReplyOForPostEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyOForPost_I_U) {
    const comment_f_photo = new ReplyOForPostEntity_U()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
