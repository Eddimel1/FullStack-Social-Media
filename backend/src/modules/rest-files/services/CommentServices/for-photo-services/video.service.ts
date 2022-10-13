
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Video_F_Comment_F_Photo } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-photo.entity'
import { COMMENT_RELATIONS } from 'src/GlobalTypes/db.types'

@Injectable()
export class VideoCommentService_F_G {
  constructor(
    @InjectRepository(Video_F_Comment_F_Photo)
    private readonly videoCommentRepository: Repository<Video_F_Comment_F_Photo>,
  ) {}

  async insertVideo(comment_id: number, url: string, filename: string) {
    const video = new Video_F_Comment_F_Photo()
    video.file_name = filename
    video.url = url
    video.commentId = comment_id
    return await this.videoCommentRepository.save(video)
  }
  async deleteVideoById(id: number) {
    return await this.videoCommentRepository.delete({ id })
  }
  async deleteVideoByOwnerId(comment_id: number, file_name: string) {
    const isSuccess = await this.videoCommentRepository
      .createQueryBuilder(COMMENT_RELATIONS.VIDEOS)
      .delete()
      .where({ commentId: comment_id, file_name: file_name })
      .execute()
    return isSuccess
  }
}
