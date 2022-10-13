import { POST_RELATIONS } from './../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { ImagePostEntity } from '../../entities/entities-for-posts/image_post.entity'


@Injectable()
export class ImagePostService {
  constructor(
    @InjectRepository(ImagePostEntity)
    private readonly imagePostRepository: Repository<ImagePostEntity>,
  ) {}

  async insertImage(post_id: number, url: string, filename: string) {
    const image = new ImagePostEntity()
    image.file_name = filename
    image.url = url
    image.postId = post_id
    return await this.imagePostRepository.save(image)
  }
  async deleteImageById(id: number) {
    return await this.imagePostRepository.delete({ id })
  }
  async deleteImageByOwnerId(post_id: number, file_name: string) {
    const isSuccess = await this.imagePostRepository
      .createQueryBuilder(POST_RELATIONS.IMAGES)
      .delete()
      .where({ postId: post_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}