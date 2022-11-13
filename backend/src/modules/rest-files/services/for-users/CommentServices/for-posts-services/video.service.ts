import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Post_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-post.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForPostEntity_U } from 'src/modules/comments/user/entities/comment-for-post.entity'

@Injectable()
export class Video_F_Comment_F_Post_Service_U extends BaseFileCRUDService<
  Video_F_Comment_F_Post_U,
  CommentForPostEntity_U
> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Post_U)
    protected repository: Repository<Video_F_Comment_F_Post_U>,
    @InjectRepository(CommentForPostEntity_U)
    protected parent_repository: Repository<CommentForPostEntity_U>,
  ) {
    super(
      repository,
      Video_F_Comment_F_Post_U,
      parent_repository,
      CommentForPostEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
