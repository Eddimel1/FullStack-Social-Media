import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-photo.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'

@Injectable()
export class Video_F_Comment_F_Photo_Service_G extends BaseFileCRUDService<Video_F_Comment_F_Photo_G> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Photo_G)
    protected repository: Repository<Video_F_Comment_F_Photo_G>,
  ) {
    super(repository, Video_F_Comment_F_Photo_G)
  }
}

