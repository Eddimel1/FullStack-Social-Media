import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForVideoEntity_U } from 'src/modules/replies/user-replies/entities/reply-f-video.entity'
import { Audio_F_Reply_F_Video_U } from 'src/modules/rest-files/entities/users/entities-for-replies/audio-f-video.entity'

@Injectable()
export class Audio_F_Reply_F_Video_Service_U extends BaseFileCRUDService<
  Audio_F_Reply_F_Video_U,
  ReplyForVideoEntity_U
> {
  constructor(
    @InjectRepository(Audio_F_Reply_F_Video_U)
    protected repository: Repository<Audio_F_Reply_F_Video_U>,
    @InjectRepository(ReplyForVideoEntity_U)
    protected parent_repository: Repository<ReplyForVideoEntity_U>,
  ) {
    super(
      repository,
      Audio_F_Reply_F_Video_U,
      parent_repository,
      ReplyForVideoEntity_U,
      {
        parentAutoCreate: true,
      },
    )
  }
}
