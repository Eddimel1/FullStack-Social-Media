import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyForVideo_I_U } from '../dto/comment-for-video/input.dto'
import { ReplyForVideoEntity_U } from '../entities/reply-f-video.entity'

@Injectable()
export class ReplyForVideoService_DB_U extends Base_Crud_W_FindAll<ReplyForVideoEntity_U> {
  constructor(
    @InjectRepository(ReplyForVideoEntity_U)
    protected repository: Repository<ReplyForVideoEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyForVideo_I_U) {
    const comment_f_photo = new ReplyForVideoEntity_U()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
