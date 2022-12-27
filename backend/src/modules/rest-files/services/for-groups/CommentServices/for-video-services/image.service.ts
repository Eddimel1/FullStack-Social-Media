import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Image_F_Comment_F_Video_G } from 'src/modules/rest-files/entities/groups/entitites-for-comments/image-f-video.entity'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { CommentForVideo_G } from 'src/modules/comments/group/entities/comment-for-video_g.entity'

@Injectable()
export class Image_F_Comment_F_Video_Service_G extends BaseFileCRUDService<
  Image_F_Comment_F_Video_G,
  CommentForVideo_G
> {
  constructor(
    @InjectRepository(Image_F_Comment_F_Video_G)
    protected repository: Repository<Image_F_Comment_F_Video_G>,
    @InjectRepository(CommentForVideo_G)
    protected parent_repository: Repository<CommentForVideo_G>,
  ) {
    super(
      repository,
      Image_F_Comment_F_Video_G,
      parent_repository,
      CommentForVideo_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
