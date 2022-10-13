import { USER_RELATIONS } from './../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { VideoEntity } from '../../entities/galery-entities/video.entity'

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videoRepository: Repository<VideoEntity>,
  ) {}
  async insertVideo(id: number, url: string, filename: string) {
    const video = new VideoEntity()
    video.file_name = filename
    video.url = url
    video.ownerId = id
    return await this.videoRepository.save(video)
  }

  async deleteVideoById(id: number) {
    return await this.videoRepository.delete({ id })
  }
  async deleteVideoByOwnerId(user_id: number, file_name: string) {
    const isSuccess = await this.videoRepository
      .createQueryBuilder(USER_RELATIONS.VIDEOS)
      .delete()
      .where({ ownerId: user_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
