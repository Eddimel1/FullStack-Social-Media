import { USER_RELATIONS } from './../../../../GlobalTypes/db.types'
import { AudioEntity } from '../../entities/galery-entities/audio.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class AudioService {
  constructor(
    @InjectRepository(AudioEntity)
    private readonly audioRepository: Repository<AudioEntity>,
  ) {}
  async insertAudio(id: number, url: string, filename: string) {
    const audio = new AudioEntity()
    audio.file_name = filename
    audio.url = url
    audio.ownerId = id
    return await this.audioRepository.save(audio)
  }
  async deleteAudioById(id: number) {
    return await this.audioRepository.delete({ id })
  }
  async deleteAudioByOwnerId(user_id: number, file_name: string) {
    const isSuccess = await this.audioRepository
      .createQueryBuilder(USER_RELATIONS.AUDIO)
      .delete()
      .where({ ownerId: user_id, file_name: file_name })
      .execute()

    return isSuccess
  }
}
