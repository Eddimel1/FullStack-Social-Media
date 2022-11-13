import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-video.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForVideoEntity_U } from 'src/modules/comments/user/entities/comment-for-video.entity'

@Injectable()
export class Video_F_Comment_F_Video_Service_U extends BaseFileCRUDService<
  Video_F_Comment_F_Video_U,
  CommentForVideoEntity_U
> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Video_U)
    protected repository: Repository<Video_F_Comment_F_Video_U>,
    @InjectRepository(CommentForVideoEntity_U)
    protected parent_repository: Repository<CommentForVideoEntity_U>,
  ) {
    super(
      repository,
      Video_F_Comment_F_Video_U,
      parent_repository,
      CommentForVideoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
