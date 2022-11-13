import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForVideoEntity_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { Video_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/video-f-video.entity'

@Injectable()
export class Video_F_Reply_F_Video_Service_G extends BaseFileCRUDService<
  Video_F_Reply_F_Video_G,
  ReplyForVideoEntity_G
> {
  constructor(
    @InjectRepository(Video_F_Reply_F_Video_G)
    protected repository: Repository<Video_F_Reply_F_Video_G>,
    @InjectRepository(ReplyForVideoEntity_G)
    protected parent_repository: Repository<ReplyForVideoEntity_G>,
  ) {
    super(
      repository,
      Video_F_Reply_F_Video_G,
      parent_repository,
      ReplyForVideoEntity_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
