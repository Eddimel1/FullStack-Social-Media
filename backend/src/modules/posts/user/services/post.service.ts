import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePostInput } from '../dto/input.dto'
import { Base_Crud_W_FindAll } from 'src/generics/generic-services/base-crud.service'
import { Post_U } from '../entities/post.entity'

@Injectable()
export class PostService extends Base_Crud_W_FindAll<Post_U> {
  constructor(
    @InjectRepository(Post_U)
    protected repository: Repository<Post_U>,
  ) {
    super(repository)
  }
  async create(user_id: number, createPost: CreatePostInput) {
    const new_post = new Post_U()
    new_post.ownerId = user_id
    new_post.text = createPost.text
    new_post.published = true
    const id = (await this.repository.save(new_post)).id
    return this.repository.findOneBy({ id })
  }
}
