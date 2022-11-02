
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/audio_post.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'


@Injectable()
export class Audio_F_Post_Service_U extends BaseFileCRUDService<Audio_F_Post_U> {
  constructor(
    @InjectRepository(Audio_F_Post_U)
    protected repository: Repository<Audio_F_Post_U>,
  ) {
    super(repository, Audio_F_Post_U)
  }
}


