import { Video_F_Post_U } from 'src/modules/rest-files/entities/users/entities-for-posts/video_post.entity'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { PostEntity_U } from 'src/modules/posts/user/entities/post.entity'

@Injectable()
export class Video_F_Post_Service_U extends BaseFileCRUDService<
  Video_F_Post_U,
  PostEntity_U
> {
  constructor(
    @InjectRepository(Video_F_Post_U)
    protected repository: Repository<Video_F_Post_U>,
    @InjectRepository(PostEntity_U)
    protected parent_repository: Repository<PostEntity_U>,
  ) {
    super(repository, Video_F_Post_U, parent_repository, PostEntity_U, {
      parentAutoCreate: true,
    })
  }
}
