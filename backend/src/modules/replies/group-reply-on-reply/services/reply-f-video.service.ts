import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyOForVideo_I_G } from '../dto/comment-for-video/input.dto'
import { ReplyOForVideoEntity_G } from '../entities/replyo-f-video.entity'


@Injectable()
export class ReplyOForVideoService_DB_G extends Base_Crud_W_FindAll<ReplyOForVideoEntity_G> {
  constructor(
    @InjectRepository(ReplyOForVideoEntity_G)
    protected repository: Repository<ReplyOForVideoEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyOForVideo_I_G) {
    const comment_f_photo = new ReplyOForVideoEntity_G()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
