import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Image_F_Comment_F_Video_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/image-f-video.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForVideoEntity_U } from 'src/modules/comments/user/entities/comment-for-video.entity'

@Injectable()
export class Image_F_Comment_F_Video_Service_U extends BaseFileCRUDService<
  Image_F_Comment_F_Video_U,
  CommentForVideoEntity_U
> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Video_U)
    protected repository: Repository<Image_F_Comment_F_Video_U>,
    @InjectRepository(CommentForVideoEntity_U)
    protected parent_repository: Repository<CommentForVideoEntity_U>,
  ) {
    super(
      repository,
      Image_F_Comment_F_Video_U,
      parent_repository,
      CommentForVideoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
