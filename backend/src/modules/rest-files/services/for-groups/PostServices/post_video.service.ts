import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/video_post.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'

@Injectable()
export class Video_F_Post_Service_G extends BaseFileCRUDService<Video_F_Post_G> {
  constructor(
    @InjectRepository(Video_F_Post_G)
    protected repository: Repository<Video_F_Post_G>,
  ) {
    super(repository, Video_F_Post_G)
  }
}
