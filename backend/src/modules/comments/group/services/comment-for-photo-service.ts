import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generics/generic-services/base-crud.service'
import { Repository } from 'typeorm'
import { CreateComment } from '../../shared/dto/input.dto'
import { CommentForPhotoEntity_G } from '../entities/comment-for-photo_g.entity'

@Injectable()
export class CommentForPhotoService_DB_G extends Base_Crud_W_FindAll<CommentForPhotoEntity_G> {
  constructor(
    @InjectRepository(CommentForPhotoEntity_G)
    protected repository: Repository<CommentForPhotoEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateComment, userId: number) {
    const new_comment = new CommentForPhotoEntity_G()
    new_comment.userId = userId
    new_comment.ownerId = createCommentInput.ownerId
    new_comment.text = createCommentInput.text
    const id = (await this.repository.save(new_comment)).id
    return this.repository.findOneBy({ id })
  }
}
