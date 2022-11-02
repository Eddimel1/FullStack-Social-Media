import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import { CreateCommentForPost_I_G } from '../dto/comment-for-post/input.dto'

import { CommentForPostEntity_G } from '../entities/comment-for-post_g.entity'

@Injectable()
export class CommentForPostService_DB_G extends Base_Crud_W_FindAll<CommentForPostEntity_G> {
  constructor(
    @InjectRepository(CommentForPostEntity_G)
    protected repository: Repository<CommentForPostEntity_G>,
  ) {
    super(repository)
  }
  async create(createCommentInput: CreateCommentForPost_I_G) {
    const comment_f_photo = new CommentForPostEntity_G()
    comment_f_photo.ownerId = createCommentInput.postId
    comment_f_photo.text = createCommentInput.text
    return this.repository.save(comment_f_photo)
  }
}
