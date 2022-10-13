import { COMMENT_RELATIONS } from '../../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Video } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-video'

@Injectable()
export class VideoCommentService_F_V {
  constructor(
    @InjectRepository(Video_F_Comment_F_Video)
    private readonly videoCommentRepository: Repository<Video_F_Comment_F_Video>,
  ) {}

  async insertVideo(comment_id: number, url: string, filename: string) {
    const video = new Video_F_Comment_F_Video()
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
      .createQueryBuilder(COMMENT_RELATIONS.AUDIO)
      .delete()
      .where({ commentId: comment_id, file_name: file_name })
      .execute()
    return isSuccess
  }
}
