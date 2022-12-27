import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Post_G } from 'src/modules/rest-files/entities/groups/entities-for-posts/video_post.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { Post_G } from 'src/modules/posts/group/entities/posts-for-group.entity'

@Injectable()
export class Video_F_Post_Service_G extends BaseFileCRUDService<
  Video_F_Post_G,
  Post_G
> {
  constructor(
    @InjectRepository(Video_F_Post_G)
    protected repository: Repository<Video_F_Post_G>,
    @InjectRepository(Post_G)
    protected parent_repository: Repository<Post_G>,
  ) {
    super(repository, Video_F_Post_G, parent_repository, Post_G, {
      parentAutoCreate: true,
      userRelation: true,
    })
  }
}
