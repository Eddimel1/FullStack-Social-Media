import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-video.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'

@Injectable()
export class Video_F_Comment_F_Video_Service_U extends BaseFileCRUDService<Video_F_Comment_F_Video_U> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Video_U)
    protected repository: Repository<Video_F_Comment_F_Video_U>,
  ) {
    super(repository, Video_F_Comment_F_Video_U)
  }
}
