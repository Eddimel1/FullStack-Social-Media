import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Image_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-video.entity'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'

@Injectable()
export class Image_F_Comment_F_Video_Service_G extends BaseFileCRUDService<Image_F_Comment_F_Video_G> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Video_G)
    protected repository: Repository<Image_F_Comment_F_Video_G>,
  ) {
    super(repository, Image_F_Comment_F_Video_G)
  }
}

