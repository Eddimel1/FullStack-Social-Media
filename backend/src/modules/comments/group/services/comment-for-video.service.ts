import { Base_Crud_W_FindAll } from 'src/generics/generic-services/base-crud.service'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CommentForVideoEntity_G } from '../entities/comment-for-video_g.entity'
import { CreateComment } from '../../shared/dto/input.dto'

@Injectable()
export class CommentForVideoService_DB_G extends Base_Crud_W_FindAll<CommentForVideoEntity_G> {
  constructor(
    @InjectRepository(CommentForVideoEntity_G)
    protected repository: Repository<CommentForVideoEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateComment, userId: number) {
    const new_comment = new CommentForVideoEntity_G()
    new_comment.ownerId = createCommentInput.ownerId
    new_comment.text = createCommentInput.text
    new_comment.userId = userId
    const id = (await this.repository.save(new_comment)).id
    return this.repository.findOneBy({ id })
  }
}
