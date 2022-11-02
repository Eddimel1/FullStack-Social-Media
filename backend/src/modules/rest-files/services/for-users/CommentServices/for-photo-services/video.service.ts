import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Photo_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-photo.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'

@Injectable()
export class Video_F_Comment_F_Photo_Service_U extends BaseFileCRUDService<Video_F_Comment_F_Photo_U> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Photo_U)
    protected repository: Repository<Video_F_Comment_F_Photo_U>,
  ) {
    super(repository, Video_F_Comment_F_Photo_U)
  }
}
