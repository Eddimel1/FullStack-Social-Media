import { COMMENT_RELATIONS } from '../../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/video-f-post'


@Injectable()
export class VideoCommentService_F_P {
  constructor(
    @InjectRepository(Video_F_Comment_F_Post)
    private readonly videoCommentRepository: Repository<Video_F_Comment_F_Post>,
  ) {}

  async insertVideo(comment_id: number, url: string, filename: string) {
    const image = new Video_F_Comment_F_Post()
    image.file_name = filename
    image.url = url
    image.commentId = comment_id
    return await this.videoCommentRepository.save(image)
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