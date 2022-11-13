import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Photo_U } from 'src/modules/rest-files/entities/users/entitites-for-comments/video-f-photo.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForPhotoEntity_U } from 'src/modules/comments/user/entities/comment-for-photo.entity'

@Injectable()
export class Video_F_Comment_F_Photo_Service_U extends BaseFileCRUDService<
  Video_F_Comment_F_Photo_U,
  CommentForPhotoEntity_U
> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Photo_U)
    protected repository: Repository<Video_F_Comment_F_Photo_U>,
    @InjectRepository(CommentForPhotoEntity_U)
    protected parent_repository: Repository<CommentForPhotoEntity_U>,
  ) {
    super(
      repository,
      Video_F_Comment_F_Photo_U,
      parent_repository,
      CommentForPhotoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
