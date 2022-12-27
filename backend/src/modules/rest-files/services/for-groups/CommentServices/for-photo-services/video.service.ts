import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Video_F_Comment_F_Photo_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/video-f-photo.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForPhoto_G } from 'src/modules/comments/group/entities/comment-for-photo_g.entity'

@Injectable()
export class Video_F_Comment_F_Photo_Service_G extends BaseFileCRUDService<
  Video_F_Comment_F_Photo_G,
  CommentForPhoto_G
> {
  constructor(
    @InjectRepository(Video_F_Comment_F_Photo_G)
    protected repository: Repository<Video_F_Comment_F_Photo_G>,
    @InjectRepository(CommentForPhoto_G)
    protected parent_repository: Repository<CommentForPhoto_G>,
  ) {
    super(
      repository,
      Video_F_Comment_F_Photo_G,
      parent_repository,
      CommentForPhoto_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
