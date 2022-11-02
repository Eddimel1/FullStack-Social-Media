import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateReplyForVideo_I_G } from '../dto/comment-for-video/input.dto'
import { ReplyForVideoEntity_G } from '../entities/reply-f-video.entity'

@Injectable()
export class ReplyForVideoService_DB_G extends Base_Crud_W_FindAll<ReplyForVideoEntity_G> {
  constructor(
    @InjectRepository(ReplyForVideoEntity_G)
    protected repository: Repository<ReplyForVideoEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateReplyForVideo_I_G) {
    const comment_f_photo = new ReplyForVideoEntity_G()
    comment_f_photo.ownerId = createCommentInput.commentId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}