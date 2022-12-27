import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { Image_F_Comment_F_Post_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-post.entity'
import { CommentForPost_G } from 'src/modules/comments/group/entities/comment-for-post_g.entity'

@Injectable()
export class Image_F_Comment_F_Post_Service_G extends BaseFileCRUDService<
  Image_F_Comment_F_Post_G,
  CommentForPost_G
> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Post_G)
    protected repository: Repository<Image_F_Comment_F_Post_G>,
    @InjectRepository(CommentForPost_G)
    protected parent_repository: Repository<CommentForPost_G>,
  ) {
    super(
      repository,
      Image_F_Comment_F_Post_G,
      parent_repository,
      CommentForPost_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
