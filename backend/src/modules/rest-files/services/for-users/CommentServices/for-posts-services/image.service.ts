import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Image_F_Comment_F_Post_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-post.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'

import { CommentForPostEntity_U } from 'src/modules/comments/user/entities/comment-for-post.entity'

@Injectable()
export class Image_F_Comment_F_Post_Service_U extends BaseFileCRUDService<
  Image_F_Comment_F_Post_U,
  CommentForPostEntity_U
> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Post_U)
    protected repository: Repository<Image_F_Comment_F_Post_U>,
    @InjectRepository(CommentForPostEntity_U)
    protected parent_repository: Repository<CommentForPostEntity_U>,
  ) {
    super(
      repository,
      Image_F_Comment_F_Post_U,
      parent_repository,
      CommentForPostEntity_U,
      {
        parentAutoCreate: true,
        userRelation: true,
      },
    )
  }
}
