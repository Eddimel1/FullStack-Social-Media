import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Base_Crud_W_FindAll } from 'src/generics/generic-services/base-crud.service'

import { Repository } from 'typeorm'
import { CreatePost_F_Group_I } from '../dto/input'

import { PostEntity_G } from '../entities/posts-for-group.entity'

@Injectable()
export class PostsForGroupService extends Base_Crud_W_FindAll<PostEntity_G> {
  constructor(
    @InjectRepository(PostEntity_G)
    protected repository: Repository<PostEntity_G>,
  ) {
    super(repository)
  }
  async create(createPost: CreatePost_F_Group_I, userId: number) {
    const new_post = new PostEntity_G()
    new_post.ownerId = createPost.ownerId
    new_post.text = createPost.text
    new_post.userId = userId
    const id = (await this.repository.save(new_post)).id
    console.log(await this.repository.findOneBy({ id }))
    return this.repository.findOneBy({ id })
  }
}
