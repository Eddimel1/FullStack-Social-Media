import { Video_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/video_post.entity'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'


@Injectable()
export class Video_F_Post_Service_U extends BaseFileCRUDService<Video_F_Post_U> {
  constructor(
    @InjectRepository(Video_F_Post_U)
    protected repository: Repository<Video_F_Post_U>,
  ) {
    super(repository, Video_F_Post_U)
  }
}

