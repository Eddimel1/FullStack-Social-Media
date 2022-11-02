import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyForPost_I_U } from '../dto/comment-for-post/input.dto'
import { ReplyForPostEntity_U } from '../entities/reply-f-post.entity'

@Injectable()
export class ReplyForPostService_DB_U extends Base_Crud_W_FindAll<ReplyForPostEntity_U> {
  constructor(
    @InjectRepository(ReplyForPostEntity_U)
    protected repository: Repository<ReplyForPostEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyForPost_I_U) {
    const comment_f_photo = new ReplyForPostEntity_U()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
