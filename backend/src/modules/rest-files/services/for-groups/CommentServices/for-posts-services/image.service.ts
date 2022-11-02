import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generic-services/base-file-crud.service'
import { Image_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-post.entity'

@Injectable()
export class Image_F_Comment_F_Post_Service_G extends BaseFileCRUDService<Image_F_Comment_F_Post_G> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Post_G)
    protected repository: Repository<Image_F_Comment_F_Post_G>,
  ) {
    super(repository, Image_F_Comment_F_Post_G)
  }
}
