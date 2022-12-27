import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseFileCRUDService } from 'src/generics/generic-services/base-file-crud.service'
import { ReplyForVideo_G } from 'src/modules/replies/group-replies/entities/reply-f-video.entity'
import { Audio_F_Reply_F_Video_G } from 'src/modules/rest-files/entities/groups/entities-for-replies/audio-f-video.entity'

@Injectable()
export class Audio_F_Reply_F_Video_Service_G extends BaseFileCRUDService<
  Audio_F_Reply_F_Video_G,
  ReplyForVideo_G
> {
  constructor(
    @InjectRepository(Audio_F_Reply_F_Video_G)
    protected repository: Repository<Audio_F_Reply_F_Video_G>,
    @InjectRepository(ReplyForVideo_G)
    protected parent_repository: Repository<ReplyForVideo_G>,
  ) {
    super(
      repository,
      Audio_F_Reply_F_Video_G,
      parent_repository,
      ReplyForVideo_G,
      {
        parentAutoCreate: true,
      },
    )
  }
}
