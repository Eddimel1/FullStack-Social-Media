import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForVideoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'
import { Image_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/image-f-video.entity'

@Injectable()
export class Image_F_Reply_F_Video_Service_U extends BaseFileCRUDService<
  Image_F_Reply_F_Video_U,
  ReplyForVideoEntity_U
> {
  constructor(
    @InjectRepository(Image_F_Reply_F_Video_U)
    protected repository: Repository<Image_F_Reply_F_Video_U>,
    @InjectRepository(ReplyForVideoEntity_U)
    protected parent_repository: Repository<ReplyForVideoEntity_U>,
  ) {
    super(
      repository,
      Image_F_Reply_F_Video_U,
      parent_repository,
      ReplyForVideoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
