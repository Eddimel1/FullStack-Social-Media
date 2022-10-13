import { COMMENT_RELATIONS } from '../../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Audio_F_Comment_F_Post } from 'src/modules/rest-files/entities/entitites-for-comments/audio-f-post.entity'

@Injectable()
export class AudioCommentService_F_P {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Post)
    private readonly audioCommentRepository: Repository<Audio_F_Comment_F_Post>,
  ) {}

  async insertAudio(comment_id: number, url: string, filename: string) {
    const audio = new Audio_F_Comment_F_Post()
    audio.file_name = filename
    audio.url = url
    audio.commentId = comment_id
    return await this.audioCommentRepository.save(audio)
  }
  async deleteAudioById(id: number) {
    return await this.audioCommentRepository.delete({ id })
  }
  async deleteAudioByOwnerId(comment_id: number, file_name: string) {
    const isSuccess = await this.audioCommentRepository
      .createQueryBuilder(COMMENT_RELATIONS.AUDIO)
      .delete()
      .where({ commentId: comment_id, file_name: file_name })
      .execute()
    return isSuccess
  }
}
