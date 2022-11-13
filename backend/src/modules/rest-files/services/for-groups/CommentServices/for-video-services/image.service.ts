import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Image_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-video.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForVideoEntity_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'

@Injectable()
export class Image_F_Comment_F_Video_Service_G extends BaseFileCRUDService<
  Image_F_Comment_F_Video_G,
  CommentForVideoEntity_G
> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Video_G)
    protected repository: Repository<Image_F_Comment_F_Video_G>,
    @InjectRepository(CommentForVideoEntity_G)
    protected parent_repository: Repository<CommentForVideoEntity_G>,
  ) {
    super(
      repository,
      Image_F_Comment_F_Video_G,
      parent_repository,
      CommentForVideoEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
