import { POST_RELATIONS } from './../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { VideoPostEntity } from '../../entities/entities-for-posts/video_post.entity'


@Injectable()
export class VideoPostService {
  constructor(
    @InjectRepository(VideoPostEntity)
    private readonly videoPostRepository: Repository<VideoPostEntity>,
  ) {}

  async insertVideo(post_id: number, url: string, filename: string) {
    const image = new VideoPostEntity()
    image.file_name = filename
    image.url = url
    image.postId = post_id
    return await this.videoPostRepository.save(image)
  }
  async deleteVideoById(id: number) {
    return await this.videoPostRepository.delete({ id })
  }
  async deleteVideoByOwnerId(post_id: number, file_name: string) {
    const isSuccess = await this.videoPostRepository
      .createQueryBuilder(POST_RELATIONS.VIDEOS)
      .delete()
      .where({ postId: post_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
