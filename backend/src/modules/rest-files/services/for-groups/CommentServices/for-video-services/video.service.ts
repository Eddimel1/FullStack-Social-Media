import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-video.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'

@Injectable()
export class Video_F_Comment_F_Video_Service_G extends BaseFileCRUDService<Video_F_Comment_F_Video_G> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Video_G)
    protected repository: Repository<Video_F_Comment_F_Video_G>,
  ) {
    super(repository, Video_F_Comment_F_Video_G)
  }
}
