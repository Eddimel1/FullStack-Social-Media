import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generics/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateComment } from '../../shared/dto/input.dto'
import { CommentForVideoEntity_U } from '../entities/comment-for-video.entity'

@Injectable()
export class CommentForVideoService_DB_U extends Base_Crud_W_FindAll<CommentForVideoEntity_U> {
  constructor(
    @InjectRepository(CommentForVideoEntity_U)
    protected repository: Repository<CommentForVideoEntity_U>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateComment, userId: number) {
    const new_comment = new CommentForVideoEntity_U()
    new_comment.ownerId = createCommentInput.ownerId
    new_comment.text = createCommentInput.text
    new_comment.userId = userId
    const id = (await this.repository.save(new_comment)).id
    return this.repository.findOneBy({ id })
  }
}
