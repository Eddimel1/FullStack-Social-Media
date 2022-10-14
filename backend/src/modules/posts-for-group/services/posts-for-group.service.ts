import { Injectable } from '@nestjs/common'
import {
  CreatePostsForGroupInput,
  UpdatePostsForGroupInput,
} from '../dto/input'

@Injectable()
export class PostsForGroupService {
  create(createPostsForGroupInput: CreatePostsForGroupInput) {
    return 'This action adds a new postsForGroup'
  }

  findAll() {
    return `This action returns all postsForGroup`
  }

  findOne(id: number) {
    return `This action returns a #${id} postsForGroup`
  }

  update(id: number, updatePostsForGroupInput: UpdatePostsForGroupInput) {
    return `This action updates a #${id} postsForGroup`
  }

  remove(id: number) {
    return `This action removes a #${id} postsForGroup`
  }
}
