
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'
import { Audio_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-post.entity'

@Injectable()
export class Audio_F_Comment_F_Post_Service_G extends BaseFileCRUDService<Audio_F_Comment_F_Post_G> {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Post_G)
    protected repository: Repository<Audio_F_Comment_F_Post_G>,
  ) {
    super(repository, Audio_F_Comment_F_Post_G)
  }
}
