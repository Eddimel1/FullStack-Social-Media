import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForVideoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { Image_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/image-f-video.entity'

@Injectable()
export class Image_F_Reply_F_Video_Service_G extends BaseFileCRUDService<
  Image_F_Reply_F_Video_G,
  ReplyForVideoEntity_G
> {
  constructor(
    @InjectRepository(Image_F_Reply_F_Video_G)
    protected repository: Repository<Image_F_Reply_F_Video_G>,
    @InjectRepository(ReplyForVideoEntity_G)
    protected parent_repository: Repository<ReplyForVideoEntity_G>,
  ) {
    super(
      repository,
      Image_F_Reply_F_Video_G,
      parent_repository,
      ReplyForVideoEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
