import { Image_F_Post_U } from './../../../entities/users/entities-for-posts/image_post.entity'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { PostEntity_U } from 'src/modules/posts/user/entities/post.entity'

@Injectable()
export class Image_F_Post_Service_U extends BaseFileCRUDService<
  Image_F_Post_U,
  PostEntity_U
> {
  constructor(
    @InjectRepository(Image_F_Post_U)
    protected repository: Repository<Image_F_Post_U>,
    @InjectRepository(PostEntity_U)
    protected parent_repository: Repository<PostEntity_U>,
  ) {
    super(repository, Image_F_Post_U, parent_repository, PostEntity_U, {
      parentAutoCreate: true,
    })
  }
}
