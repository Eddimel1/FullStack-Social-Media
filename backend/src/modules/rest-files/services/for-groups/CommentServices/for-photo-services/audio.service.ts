
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Audio_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/audio-f-photo.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'

@Injectable()
export class Audio_F_Comment_F_Photo_Service_G extends BaseFileCRUDService<Audio_F_Comment_F_Photo_G> {
  constructor(
    @InjectRepository(Audio_F_Comment_F_Photo_G)
    protected repository: Repository<Audio_F_Comment_F_Photo_G>,
  ) {
    super(repository, Audio_F_Comment_F_Photo_G)
  }
}

