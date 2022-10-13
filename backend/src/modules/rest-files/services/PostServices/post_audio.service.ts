import { POST_RELATIONS } from './../../../../GlobalTypes/db.types'
import { AudioPostEntity } from '../../entities/entities-for-posts/audio_post.entity'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AudioPostService {
  constructor(
    @InjectRepository(AudioPostEntity)
    private readonly audioPostRepository: Repository<AudioPostEntity>,
  ) {}

  async insertAudio(post_id: number, url: string, filename: string) {
    const audio = new AudioPostEntity()
    audio.file_name = filename
    audio.url = url
    audio.postId = post_id
    return await this.audioPostRepository.save(audio)
  }
  async deleteAudioById(id: number) {
    return await this.audioPostRepository.delete({ id })
  }
  async deleteAudioByOwnerId(post_id: number, file_name: string) {
    const isSuccess = await this.audioPostRepository
      .createQueryBuilder(POST_RELATIONS.AUDIO)
      .delete()
      .where({ postId: post_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
