import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generics/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateComment } from '../../shared/dto/input.dto'
import { CommentForPostEntity_G } from '../entities/comment-for-post_g.entity'
@Injectable()
export class CommentForPostService_DB_G extends Base_Crud_W_FindAll<CommentForPostEntity_G> {
  constructor(
    @InjectRepository(CommentForPostEntity_G)
    protected repository: Repository<CommentForPostEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateComment, userId: number) {
    const new_comment = new CommentForPostEntity_G()
    new_comment.ownerId = createCommentInput.ownerId
    new_comment.text = createCommentInput.text
    new_comment.userId = userId
    const id = (await this.repository.save(new_comment)).id
    return this.repository.findOneBy({ id })
  }
}
