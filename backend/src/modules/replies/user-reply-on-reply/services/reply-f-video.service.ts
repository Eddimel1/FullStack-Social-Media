import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyOForVideo_I_U } from '../dto/comment-for-video/input.dto'
import { ReplyOForVideoEntity_U } from '../entities/replyo-f-video.entity'

@Injectable()
export class ReplyOForVideoService_DB_U extends Base_Crud_W_FindAll<ReplyOForVideoEntity_U> {
  constructor(
    @InjectRepository(ReplyOForVideoEntity_U)
    protected repository: Repository<ReplyOForVideoEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyOForVideo_I_U) {
    const comment_f_photo = new ReplyOForVideoEntity_U()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
