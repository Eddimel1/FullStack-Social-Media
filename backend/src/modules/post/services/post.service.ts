import { PostEntity } from 'src/modules/post/entities/post.entity'
import { Injectable } from '@nestjs/common'
import { CreatePostInput } from '../dto/create-post.input'
import { UpdatePostInput } from '../dto/update-post.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DEFAULT_PORTION } from 'src/constants/db.constants'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}
  create(user_id: number, createPost: CreatePostInput) {
    const new_post = new PostEntity()
    new_post.ownerId = user_id
    new_post.text = createPost.text
    const post = this.postRepository.save(new_post)
    return post
  }

  async findAll(user_id: number) {
    return this.postRepository
      .createQueryBuilder('posts')
      .where('posts.ownerId = :user_id', { user_id })
      .take(DEFAULT_PORTION)
      .getMany()
  }

  async findOne(ownerId: number, post_id: number) {
    const post = await this.postRepository.findOneBy({ ownerId, id: post_id })
    return post
  }
  //?
  async update(userId: number, updatePostInput: UpdatePostInput) {
    const { postId, ...updateData } = updatePostInput
    console.log(postId, updateData)
    await this.postRepository.update(
      { ownerId: userId, id: postId },
      { text: updateData.text },
    )
    return this.findOne(userId, postId)
  }

  async remove(userId: number, postId: number) {
    const deleteResult = await this.postRepository
      .createQueryBuilder('posts')
      .where('ownerId =:userId', { userId })
      .andWhere('id =:postId', { postId })
      .delete()
      .execute()
    const message = {
      postId,
      isDeleted: deleteResult.affected > 0 ? true : false,
    }
    return message
  }
}
