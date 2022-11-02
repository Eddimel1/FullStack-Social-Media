
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/audio_post.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'


@Injectable()
export class Audio_F_Post_Service_G extends BaseFileCRUDService<Audio_F_Post_G> {
  constructor(
    @InjectRepository(Audio_F_Post_G)
    protected repository: Repository<Audio_F_Post_G>,
  ) {
    super(repository, Audio_F_Post_G)
  }
}
// @Injectable()
// export class  Audio_F_Post_Service_G {
//   constructor(
//     @InjectRepository(Audio_F_Post_G)
//     private readonly audioPostRepository: Repository<Audio_F_Post_G>,
//   ) {}

//   async insertAudio(post_id: number, url: string, filename: string) {
//     const audio = new Audio_F_Post_G()
//     audio.file_name = filename
//     audio.url = url
//     audio.postId = post_id
//     return await this.audioPostRepository.save(audio)
//   }
//   async deleteAudioById(id: number) {
//     return await this.audioPostRepository.delete({ id })
//   }
//   async deleteAudioByOwnerId(post_id: number, file_name: string) {
//     const isSuccess = await this.audioPostRepository
//       .createQueryBuilder('audio')
//       .delete()
//       .where({ postId: post_id, file_name: file_name })
//       .execute()

//     return isSuccess
//   }
// }
