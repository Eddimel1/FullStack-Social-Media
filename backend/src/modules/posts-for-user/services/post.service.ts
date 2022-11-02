
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostInput } from '../dto/input.dto'
import { Base_Crud_W_FindAll } from 'src/generic-services/base-crud.service'
import { PostEntity_U } from '../entities/post.entity'

@Injectable()
export class PostService extends Base_Crud_W_FindAll<PostEntity_U> {
  constructor(
    @InjectRepository(PostEntity_U)
    protected repository: Repository<PostEntity_U>,
  ) {
    super(repository)
  }
  create(user_id: number, createPost: CreatePostInput) {
    const new_post = new PostEntity_U()
    new_post.ownerId = user_id
    new_post.text = createPost.text
    const post = this.repository.save(new_post)
    return post
  }

}
