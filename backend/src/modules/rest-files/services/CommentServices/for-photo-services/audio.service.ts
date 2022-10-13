import {
  COMMENT_RELATIONS,
  POST_RELATIONS,
} from '../../../../../GlobalTypes/db.types'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Audio_F_Comment_F_Photo } from 'src/modules/rest-files/entities/entitites-for-comments/audio-f-photo.entity'

@Injectable()
export class AudioCommentService_F_G {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Photo)
    private readonly audioCommentRepository: Repository<Audio_F_Comment_F_Photo>,
  ) {}

  async insertAudio(commentId: number, url: string, filename: string) {
    const audio = new Audio_F_Comment_F_Photo()
    audio.file_name = filename
    audio.url = url
    audio.commentId = commentId
    return await this.audioCommentRepository.save(audio)
  }
  async deleteAudioById(id: number) {
    return await this.audioCommentRepository.delete({ id })
  }
  async deleteAudioByOwnerId(commentId: number, file_name: string) {
    const isSuccess = await this.audioCommentRepository
      .createQueryBuilder(COMMENT_RELATIONS.AUDIO)
      .delete()
      .where({ commentId: commentId, file_name: file_name })
      .execute()
    return isSuccess
  }
}
