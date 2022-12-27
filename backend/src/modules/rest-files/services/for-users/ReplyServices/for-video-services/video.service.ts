import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForVideo_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'
import { Video_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/video-f-video.entity'

@Injectable()
export class Video_F_Reply_F_Video_Service_U extends BaseFileCRUDService<
  Video_F_Reply_F_Video_U,
  ReplyForVideo_U
> {
  constructor(
    @InjectRepository(Video_F_Reply_F_Video_U)
    protected repository: Repository<Video_F_Reply_F_Video_U>,
    @InjectRepository(ReplyForVideo_U)
    protected parent_repository: Repository<ReplyForVideo_U>,
  ) {
    super(
      repository,
      Video_F_Reply_F_Video_U,
      parent_repository,
      ReplyForVideo_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
